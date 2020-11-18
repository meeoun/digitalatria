<template>
  <div class="about-more-autor">
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#about-autor" data-toggle="tab">About The Author</a>
      </li>
      <li>
        <a href="#more-autor" data-toggle="tab">More From Author</a>
      </li>
    </ul>

    <div class="tab-content">

      <div class="tab-pane active" id="about-autor">
        <div class="autor-box">
          <img :src=author.image :alt=author.name>
          <div class="autor-content">
            <div class="autor-title">
              <h1><span>{{author.name}}</span><nuxt-link :to="'/authors/'+author.slug">{{author.posts}} Posts</nuxt-link></h1>
            </div>
            <p>
              {{author.bio}}
         </p>
          </div>
        </div>
      </div>

      <div class="tab-pane" id="more-autor">
        <div class="more-autor-posts">

          <div v-for="post in author.recent_posts" :key="post.id" class="news-post image-post3">
            <img :src=post.images.main.dimension_185_80.url :alt=post.name>
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
  </div>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      default: null
    }
  }
}
</script>
