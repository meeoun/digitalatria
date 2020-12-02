<template>
  <div class="block-content">

    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Send Email Verification</span></h1>
      </div>
      <el-form id="verification-send"
               v-loading="loading"
               element-loading-text="Logging In"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="verification-send"
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

          <el-button type="primary" @click="submitForm('verification-send')" :disabled="disableSubmit">Login</el-button>

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
      },rules: {
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

          let pass = true
          await APIService.resendVerification(this.form).catch(error =>{
            pass = false;
            console.log(error.response.data)
            this.showServerFail(error.response.data.data.errors)
          })

          if(pass){
            this.disableSubmit = true;
            this.showConfirm();
            this.resetForm('verification-send')
          }
        this.loading = false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showConfirm() {
      // Use sweetalert2
      this.$swal('Verification Link Sent!',
        'Please Check Your Email',
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
          footer: 'If you need to register, please use the link on the page'
        });

    }
  }
}
</script>
