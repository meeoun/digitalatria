<template>
  <section class="feature-video">
    <div class="container">
      <div class="title-section white">
        <h1><span>Latest tutorials</span></h1>
      </div>

      <div class="features-video-box owl-wrapper">
        <div class="owl-carousel" data-num="4">

          <div v-for="post in posts" :key="post.id" class="item news-post image-post3">
            <img :src=post.images.main.dimension_270_200.url :alt=post.images.main.dimension_270_200.name>
            <div v-if="post.type === 'reviews'" class="rate-level">
              <p><span>{{post.average_score}}</span>{{post.score_description}}</p>
            </div>
            <div class="hover-box">
              <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
export default {
  props:['posts']

}

</script>
