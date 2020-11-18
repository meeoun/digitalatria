<template>
  <div class="grid-box">
    <div class="title-section">
      <h1><span>Author Details</span></h1>
    </div>

    <ul class="autor-list">

      <li>

        <div class="autor-box">

          <img :src=author.image :alt=author.name>

          <div class="autor-content">

            <div class="autor-title">
              <h1><span>{{author.name}}</span>{{author.post_count}} Posts</h1>
            </div>

            <p>
              {{author.bio}}
            </p>

          </div>

        </div>

        <div class="autor-last-line">
          <ul class="autor-tags">
            <li><span><i class="fa fa-bars"></i>Category</span></li>
            <li v-for="cat in author.types"><a href="#">{{cat}}</a></li>
          </ul>
        </div>

      </li>

    </ul>

    <div class="row" v-infinite-scroll="load" style="overflow:auto; height: 700px;">
      <div v-for="post in posts" :key="post.id" class="col-md-6 infinite-list-item">
        <div class="news-post image-post2">
          <div class="post-gallery">
            <img :src=post.images.main.dimension_380_250.url :alt=post.images.main.dimension_380_250.name>
            <div class="hover-box">
              <div class="inner-hover">
                <nuxt-link class="category-post" :to="'/' + post.type">{{post.type}}</nuxt-link>

                <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
                <ul class="post-tags">
                  <li><i class="fa fa-clock-o"></i>{{ post.dates.created }}</li>
                  <li><i class="fa fa-comments-o"></i><span>{{post.comments}}</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="post-content">
            <p>{{post.excerpt.substring(0,80)}} </p>
             <nuxt-link class="read-more-button" :to="'/'+post.type+'/'+post.slug">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: {
    author: {
      type: Object,
      required: true
    }
   },computed: mapState({
      posts: state => state.authors.posts,
      links: state => state.authors.links
    }),methods: {
    load(){
      if(this.links && this.links.length > 0)
        this.$store.dispatch('authors/fetchMoreAuthorPosts', this.links[0]);
    }
  }

}
</script>
