<template>
  <div class="article-inpost">
    <div class="row">
      <div v-for="(image, key) in images" :key="image.pivot.id" class="col-md-4">
        <div class="image-content">
          <div class="image-place">
            <img :src=$config.baseURL+image.url :alt=image.name>
            <div class="hover-image">
              <a class="zoom" :href=$config.baseURL+image.url><i class="fa fa-arrows-alt"></i></a>
            </div>
          </div>
          <span class="image-caption">{{image.pivot.caption}}</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import axios from "axios";

export default {
  props: {
    postID: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      images: ''
    }
  },
  mounted() {
    axios.get(`http://localhost/api/posts/${this.postID}/images?pivot position=gallery`)
      .then(response => {
        this.images = response.data.data.data
      })
  }
}


</script>
