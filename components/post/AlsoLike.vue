<template>
  <div class="carousel-box owl-wrapper">
    <div class="title-section">
      <h1><span>You may also like</span></h1>
    </div>
    <div class="owl-carousel" :data-num=posts.length>

      <div v-for="post in posts" :key="post.id" class="item news-post image-post3">
        <img :src=post.images.main.dimension_250_200.url :alt=post.name>
        <div class="hover-box">
          <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
          <ul class="post-tags">
            <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      default: null
    }
  },mounted() {


  }


}
</script>
