<template>
  <div class="block-content">

    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Register</span></h1>
      </div>
      <el-form id="login-form"
               v-loading="loading"
               element-loading-text="Registering"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="register-form"
               :model="form"
      >
        <div class="row">

          <div class="col-md-6">
            <el-form-item label="Email*" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>

          <div class="col-md-6">
            <el-form-item label="Name" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>


          <div class="col-md-6">
            <el-form-item label="Nick Name" prop="nickName">
              <el-input v-model="form.nickName"></el-input>
            </el-form-item>
          </div>


          <div class="col-md-6">
            <el-form-item label="Password*" prop="password">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
          </div>

          <div class="col-md-6">
            <el-form-item label="Password*" prop="confirm">
              <el-input v-model="form.confirm"></el-input>
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
import {mapState} from "vuex";

export default {
  data() {
    return {
      disableSubmit: true,
      loading: false,
      form: {
        name: '',
        email: '',
        nickName: '',
        password: '',
        confirm: ''
      },rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  async fetch({store, error}) {

    try {
      await store.dispatch('contact/fetchContactMessage')

    }catch (e) {
      error({
        statusCode: 404,
        message: 'Unable to fetch Contact Message'
      })
    }
  },
  computed:{
    ...mapState({
      contactMessage: state => state.contact.contactMessage,
    })

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.$recaptcha.reset()
          this.loading = true;
          /*Login needed*/
          this.resetForm('register-form')
          this.loading = false;
          this.disableSubmit = true;
          this.showConfirm();
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
      this.$swal('Message Sent!',
        'Message Successfully Sent',
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
    }
  }
}
</script>
