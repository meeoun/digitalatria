<template>
  <div class="FieldField__wrapper">
    <img v-bind:src="imagePreview" v-on:click="openUpload" :style="style">

    <div class="form-group">
      <input
        :name="name"
        type="file"
        :id="name"
        v-on:change="updatePreview"
        style="display:none;"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    defaultImage: {
      type: String,
      default: null
    }
  },computed: {
    style() {
      return `width: ${this.width}px; height: ${this.height}px`
    }
  },
  data () {
    return {
      imagePreview: this.defaultImage ? this.defaultImage : '/images/upload_image.png'
    }
  },
  methods: {
    openUpload () {
      document.getElementById(this.name).click()
    },
    updatePreview (e) {
      let reader, files = e.target.files
      reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result
      }
      if(files[0]){
        reader.readAsDataURL(files[0])
        this.$emit('new-image',files[0]);
      }else{
        this.imagePreview = this.defaultImage ? this.defaultImage : '/images/upload_image.png'
        this.$emit('new-image',null);
      }


    }
  }
}
</script>
