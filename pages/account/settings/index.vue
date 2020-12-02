<template>
  <div class="block-content">

    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Account Settings</span></h1>
      </div>
      <el-form id="account-form"
               v-loading="loading"
               element-loading-text="Updating"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="account-form"
               :model="form"
               enctype="multipart/form-data"
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


          <div class="col-md-6 text-center">
            <el-form-item label="Avatar Image: Click to Set">
            <PictureUpload :width=100 :height=100 name="avatar-picture" :defaultImage="$auth.user.image" @new-image="getImage" style="float: right" />
            </el-form-item>
          </div>

        </div>

        <el-form-item>

          <el-button type="primary" @click="submitForm('account-form')" :disabled="disableSubmit">Update</el-button>

        </el-form-item>



      </el-form>



    </div>
    <!-- End contact form box -->

  </div>
</template>
<script>
import APIAuthService from "@/services/APIAuthService";

export default {
  middleware: ['auth'],
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
      disableSubmit: false,
      loading: false,
      form: {
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        nick_name: this.$auth.user.nick_name,
        password: '',
        password_confirmation: '',
        avatar: ''
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
          let pass = true;
          /*Registration needed*/

          await APIAuthService.accountUpdate(this.convertForm(this.form),this.$auth.getToken('local')).catch(error =>{
            pass = false;
            this.showServerFail(error.response.data.message)
          });
          if(pass){
            this.showConfirm();
          }
          this.loading = false;
        } else {
          this.showFail()
          return false;
        }
      })
    },
    convertForm(p){
      const formData = new FormData()
      for (let key of Object.keys(p)) {
        console.log(key + " -> " + p[key])
        if(p[key])
        {
          formData.append(key,p[key])
        }
      }
      return formData
    },
    getImage(image){
      this.form.avatar=image;
    },
    showConfirm() {
      // Use sweetalert2
      this.$swal('Account Updated',
        'If you changed your email, You must confirm your email before you can log back in.',
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
    }
  }
}
</script>
