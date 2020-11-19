<template>
  <div class="block-content">

    <!-- contact info box -->
    <div class="contact-info-box">
      <div class="title-section">
        <h1><span>Contact Us</span></h1>
      </div>

      <p>{{contactMessage}}</p>

    </div>
    <!-- End contact info box -->

    <!-- contact form box -->
    <div class="contact-form-box">
      <div class="title-section">
        <h1><span>Talk to us</span></h1>
      </div>
      <el-form id="contact-form"
               v-loading="loading"
               element-loading-text="Sending Message"
               element-loading-spinner="el-icon-loading"
               :rules="rules"
               ref="contact-form"
               :model="form"
      >
        <div class="row">


          <div class="col-md-6">
            <el-form-item label="Name*" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>



          <div class="col-md-6">
            <el-form-item label="Email*" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>


        </div>

        <el-form-item label="Message*" prop="message">
          <el-input type="textarea" v-model="form.message"></el-input>
        </el-form-item>

        <el-form-item>

          <el-button type="primary" @click="submitForm('contact-form')" :disabled="disableSubmit">Send Message</el-button>

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
        message: ''
      },rules: {
        name: [
          {required: true, message: 'Please Provide Your Name', trigger: 'blur'},
          {min: 3, max: 50, message: 'Length should be 3 to 50', trigger: ['blur', 'change']}
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        message:[
          { required: true, message: 'Please provide your Message', trigger: 'blur' },
          {min: 3, max: 1200, message: 'Length should be 3 to 1200', trigger: ['blur', 'change']}
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
        await this.$store.dispatch('contact/storeContactMessage', this.form);
        this.resetForm('contact-form')
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
