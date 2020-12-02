<template>
  <div class="block-content">

    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Password Reset</span></h1>
      </div>
      <el-form id="email-form"
               v-loading="loading"
               element-loading-text="Sending Email"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="email-form"
               :model="form"
      >
        <div class="row">

          <div class="col-md-12">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>

        </div>


        <el-form-item>

          <el-button type="primary" @click="submitForm('email-form')" :disabled="disableSubmit">Login</el-button>

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
    return {
      disableSubmit: true,
      loading: false,
      form: {
        email: '',
      },
      rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
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
          await APIService.passwordEmail(this.form).then(res => {

          }).catch(e => {
            pass=false
            this.showServerFail(e.response.data.data.errors)
          })
          this.loading = false;

          if(pass){
            this.disableSubmit = true;
            this.showConfirm();
            this.resetForm('email-form')
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
      this.$swal('Email Sent!',
        'Please check your email',
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
        text: message,
        footer: 'Please fix the indicated error'
      });

    }
  }
}
</script>
