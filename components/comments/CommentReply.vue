<template>
  <div>
    <el-button @click="visible = true" icon="el-icon-chat-dot-round" style="float: right"></el-button>
    <el-dialog :visible.sync="visible" title="Replying To" >

      <ul class="comment-tree">
        <li>
          <div class="comment-box">
            <img :alt=comment.user.name :src=comment.user.image>
            <div class="comment-content">
              <h4>{{comment.user.name}}</h4>
              <span><i class="fa fa-clock-o"></i>{{comment.dates.created}}</span>
              <p>{{comment.body}}</p>
            </div>
          </div>
        </li>
      </ul>

      <el-collapse>
        <el-collapse-item title="Comment Approval Process" name="1">
          <div>Do to the nature of the internet, all comments must be approved before they will appear.</div>
        </el-collapse-item>
        <el-collapse-item title="Zero Tolerance" name="2">
          <div>Zero tolerance given to trolls and trouble makers.  Your account will be banned.  You are well aware of your actions.</div>
        </el-collapse-item>
      </el-collapse>

      <el-form ref="form" :rules="rules" :model="form" label-width="120px" v-loading="loading" element-loading-text="Loading..." element-loading-spinner="el-icon-loading">
        <el-form-item label="Type Reply"  prop="body">
          <el-input type="textarea" v-model="form.body"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="el-button--default" @click="onSubmit('form')"><p style="color: white">Create</p></el-button>
          <el-button class="el-button--warning" style="float: right" @click="cancel"><p style="color: #ff0000">Cancel</p></el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>

import axios from "axios";

export default {
  props: {
    comment: {
      type: Object,
      default: null,
      required: true
    }
  },
  data () {
    return {
      visible: false,
      form: {
        body: '',
      },
      loading: false,
      response: null,
      rules: {
        body: [
          {required: true, message: 'Please input a Comment', trigger: 'blur'},
          {min: 5, max: 2000, message: 'Length should be 5 to 2000', trigger: 'blur'}
        ]
      }
    }
  },methods: {
    cancel: function () {
     this.visible = false;
    },
     onSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          return false;
        }
      });

    },
    submit(){
      this.loading = true
      axios.post(`http://laravel.net/api/comments/82/50`, {body: this.form.body})
      this.loading = false
      this.visible = false;
    }
  }
}
</script>
