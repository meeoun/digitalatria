<template>
  <div class="block-content">
  <div class="contact-form-box">
    <div class="title-section">
      <h1><span>Password Reset</span></h1>
    </div>
    <el-form id="reset-form"
             v-loading="loading"
             element-loading-text="Resetting Password"
             element-loading-spinner="el-icon-loading"
             :rules="rules"
             ref="reset-form"
             :model="form"
    >
      <div class="row">
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
        <el-button type="primary" @click="submitForm('reset-form')" :disabled="disableSubmit">Login</el-button>
      </el-form-item>

      <GoogleRecaptcha @recaptcha-status="getStatus" />


    </el-form>



  </div>

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
        password: '',
        password_confirmation: ''
      },rules: {
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
        const q = Object.keys(this.$route.query).map(k => `${k}=${this.$route.query[k]}`).join('&');
        if (valid) {
          this.loading = true;
          await this.$recaptcha.reset()
          let pass = true;
          /*Registration needed*/
          await APIService.passwordReset(this.form,q).catch(error =>{
            pass = false;
            console.log(error.response.data.data.errors)
            this.showServerFail(error.response.data.data.errors)
          });
          if(pass){
            this.resetForm('reset-form');
            this.showConfirm();
          }
          this.loading = false;
          this.disableSubmit = true;
          await this.$router.push({path: '/login'})
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
      this.$swal('Password Reset!',
        'Your Password has been Reset',
        'success');
    },
    showFail() {
      // Use sweetalert2
      this.$swal('Problems Detected!',
        'Please Fix the Indicated Errors',
        'warning');
    },showServerFail(message){
      this.$swal('Errors',
        message,
        'error');
    },
    getStatus(value){
      this.disableSubmit = value
    }
  }
}
</script>
