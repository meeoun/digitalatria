<template>
  <div class="block-content">

    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Register</span></h1>
      </div>
      <el-form id="register-form"
               v-loading="loading"
               element-loading-text="Registering"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="register-form"
               :model="form"
      >
        <div class="row">

          <div class="col-md-6">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>

          <div class="col-md-6">
            <el-form-item label="Name" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>


          <div class="col-md-6">
            <el-form-item label="Nick Name" prop="nick_name">
              <el-input v-model="form.nick_name"></el-input>
            </el-form-item>
          </div>


          <div class="col-md-6">
            <el-form-item label="Password" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
          </div>

          <div class="col-md-6">
            <el-form-item label="Confirm Password" prop="password_confirmation">
              <el-input type="password" v-model="form.password_confirmation"></el-input>
            </el-form-item>
          </div>

        </div>


        <el-form-item>

          <el-button type="primary" @click="submitForm('register-form')" :disabled="disableSubmit">Login</el-button>

        </el-form-item>

        <GoogleRecaptcha @recaptcha-status="getStatus" />


      </el-form>



    </div>
    <!-- End contact form box -->

  </div>
</template>
<script>
import APIService from "@/services/APIService";
export default {
  middleware: ['guest'],
  data() {
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.form.password) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return {
      disableSubmit: true,
      loading: false,
      form: {
        name: '',
        email: '',
        nick_name: '',
        password: '',
        password_confirmation: ''
      },rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        name: [
          { required: true, message: 'Please input your name', trigger: ['blur', 'change'] },
          { min: 3, max: 100, message: 'Length should be 3 to 100', trigger: ['blur', 'change'] }
        ],
        nick_name: [
          { required: true, message: 'Please input your nick name', trigger: ['blur', 'change'] },
          { min: 3, max: 100, message: 'Length should be 3 to 100', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please confirm your password', trigger: ['blur', 'change'] },
          { min: 6, max: 100, message: 'Length should be 6 to 100', trigger: ['blur', 'change'] },
        ],
        password_confirmation: [
          { required: true, message: 'Please confirm your password', trigger: ['blur', 'change'] },
          { min: 6, max: 100, message: 'Length should be 6 to 100', trigger: ['blur', 'change'] },
          { validator: validatePass2, trigger: ['blur', 'change']}
        ]


      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loading = true;
          await this.$recaptcha.reset()
          let pass = true;
          /*Registration needed*/
            await APIService.register(this.form).catch(error =>{
              pass = false;
              this.showServerFail(error.response.data)
            });
          if(pass){
            this.resetForm('register-form');
            this.showConfirm();
          }
          this.loading = false;
          this.disableSubmit = true;
        } else {
          this.showFail()
          return false;
        }
      })



    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showConfirm() {
      // Use sweetalert2
      this.$swal('Registered!',
        'You must confirm your email before you can log in.',
        'success');
    },
    showFail() {
      // Use sweetalert2
      this.$swal('Problems Detected!',
        'Please Fix the Indicated Errors',
        'warning');
    },showServerFail(message){
      this.$swal('Errors',
        this.$laravelError(message),
        'error');
    },
    getStatus(value){
      this.disableSubmit = value
    }
  }
}
</script>
