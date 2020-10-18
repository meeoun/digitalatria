<template>
  <div class="post-gallery">
    <ul class="bxslider">
      <li v-for="image in images" :key="image.id"><img :src=image.url alt=""></li>
    </ul>
    <span class="image-caption">{{caption}}</span>
  </div>
</template>
<script>

export default {
  props: {
    images: {
      type: Array,
      default: null,
      required: true
    },
    caption: {
      type: String,
      default: null
    }
  },mounted() {
    try {
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true
      });

    } catch(err) {
    }

  }
}
</script>
