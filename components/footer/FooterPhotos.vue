<template>
  <div class="widget flickr-widget">
    <h1>Photos</h1>
    <ul class="flickr-list">
      <li v-for="image in images" :key="image.id"><a class="zoom" :href="image.large"><img :src="image.small" alt="FooterImage"></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
   images:{
      type: Array,
      default: null,
    }
  },mounted() {
    try {
      // Example with multiple objects
      $('.zoom').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });

    } catch(err) {

    }

    try {
      // Example with multiple objects
      $('.video-link').magnificPopup({
        type: 'iframe'
      });
    } catch(err) {

    }

    try {
      var magnLink = $('.log-in-popup');
      magnLink.magnificPopup({
        closeBtnInside:true
      });
    } catch(err) {

    }
  }
}
</script>
