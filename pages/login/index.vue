<template>
  <div class="block-content">

    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Login</span></h1>
      </div>
      <el-form id="login-form"
               v-loading="loading"
               element-loading-text="Logging In"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="login-form"
               :model="form"
      >
        <div class="row">

          <div class="col-md-6">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>

          <div class="col-md-6">
            <el-form-item label="Password" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
          </div>
        </div>


        <el-form-item>

          <el-button type="primary" @click="submitForm('login-form')" :disabled="disableSubmit">Login</el-button>

        </el-form-item>

        <GoogleRecaptcha @recaptcha-status="getStatus" />


      </el-form>



    </div>
    <!-- End contact form box -->

  </div>
</template>
<script>

export default {
  middleware: ['guest'],

  data() {
    return {
      disableSubmit: true,
      loading: false,
      form: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please provide your password', trigger: ['blur', 'change'] },
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.$recaptcha.reset()
          this.loading = true;
          /*Login needed*/
          console.log(this.form)
          let pass = true
          await this.$auth.loginWith('local', {
            data: this.form
          }).then(res => {

          }).catch(e => {
            pass=false
            this.showServerFail(e.response.data)
          })
          this.loading = false;

          if(pass){
            this.disableSubmit = true;
            this.showConfirm();
            this.resetForm('login-form')
          }
        } else {
          this.showFail()
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showConfirm() {
      // Use sweetalert2
      this.$swal('Logged In!',
        'You have successfully logged in',
        'success');
    },
    showFail() {
      // Use sweetalert2
      this.$swal('Problems Detected!',
        'Please Fix the Indicated Errors',
        'warning');
    },
    getStatus(value){
      this.disableSubmit = value
    },showServerFail(message){
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: this.$laravelError(message),
          footer: 'Use the link on the page to resend the verification link'
        });

    }
  }
}
</script>
