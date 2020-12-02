<template>
  <div class="contact-form-box" style="padding-bottom: 20px;">
    <div class="title-section">
      <h1><span>Leave a Comment</span> <span class="email-not-published">You Must be Logged In to Comment.</span></h1>
    </div>
    <el-form id="comment-form"
             v-loading="loading"
             element-loading-text="Adding Comment"
             element-loading-spinner="el-icon-loading"
             :rules="rules"
             ref="comment-form"
             :model="form"
    >

      <el-form-item label="Comment*" prop="comment">
        <el-input type="textarea" v-model="form.comment"  :disabled="!$auth.loggedIn"></el-input>
      </el-form-item>

      <el-form-item>

        <el-button type="primary" @click="onSubmit('comment-form')" :disabled="!$auth.loggedIn">Post Comment</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import APIAuthService from "@/services/APIAuthService";

export default {
  props: {
    post:{
      type: Number,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      form: {
        comment: ''
      },
      rules: {
        comment: [
          {required: true, message: 'Please input a Comment', trigger: 'blur'},
          {min: 5, max: 2000, message: 'Length should be 5 to 2000', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          return false;
        }
      });
    },
    async submit() {
      this.loading = true
      await APIAuthService.storeComment(this.post, this.$auth.getToken('local'), {body: this.form.comment}).then(resp => {
          let comment = resp.data.data
          this.loading = false
          this.visible = false;
          this.$store.commit('posts/ADD_COMMENT',comment)
          this.$refs['comment-form'].resetFields();
        }
      )

    }
  }
}
</script>
