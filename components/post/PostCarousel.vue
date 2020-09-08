<template>
  <div class="post-gallery">
    {{$config.baseURL}}
    <ul class="bxslider">
      <li v-for="image in images" :key="image.pivot.id"><img :src=$config.baseURL+image.url alt=""></li>
    </ul>
    <span class="image-caption">{{caption}}</span>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {
    postID: {
      type: Number,
      required: true
    },
    caption: {
      type: String,
      default: null
    }
  },
  data(){
    return{
      images: ''
  }
  },
  mounted() {
    axios.get(`http://localhost/api/posts/${this.postID}/images?pivot position=carousel`)
    .then(response =>{
      this.images = response.data.data.data
    })


  },updated: function () {
    this.$nextTick(function () {
      try {
        $('.bxslider').bxSlider({
          mode: 'fade',
          auto: true
        });

        $('.big-bxslider').bxSlider({
          mode: 'horizontal',
          auto: true
        });

        $('.slider-call').bxSlider({
          pagerCustom: '#bx-pager'
        });

        $('.slider-call2').bxSlider({
          pagerCustom: '#bx-pager2'
        });


      } catch(err) {
      }
    })
    }
}
</script>
