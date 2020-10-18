<template>
  <div class="article-inpost">
    <div class="row">
      <div v-for="(image, key) in images" :key="image.id" class="col-md-4">
        <div class="image-content">
          <div class="image-place">
            <img :src=image.url :alt=image.name>
            <div class="hover-image">
              <a class="zoom" :href=image.url><i class="fa fa-arrows-alt"></i></a>
            </div>
          </div>
          <span class="image-caption">{{image.caption}}</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import axios from "axios";

export default {
  props: {
    images: {
      type: Array,
      default: null,
      required: true
    }
  },

}


</script>
