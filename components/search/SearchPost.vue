<template>

  <div v-loading="loading" v-infinite-scroll="load" style="overflow-y: auto; overflow-x: hidden; height: 600px;" id="scrollBox"
       element-loading-text="Fetching More Posts...">
  <div v-for="post in posts" :key="post.id"   class="news-post article-post infinite-list-item">
    <div class="row">
      <div class="col-sm-6">
        <div class="post-gallery">
          <img :src=post.images.main.dimension_380_250.url :alt=post.images.main.dimension_380_250.name>
          <nuxt-link class="category-post" :to="'/'+post.type+'/'">{{post.type}}</nuxt-link>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="post-content">
          <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
          <ul class="post-tags">
            <li><i class="fa fa-clock-o"></i>{{post.created}}</li>
            <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+post.author.slug">{{post.author.name}}</nuxt-link></li>
            <li><i class="fa fa-comments-o"></i><span>{{post.comments}}</span></li>
            <li><i class="fa fa-eye"></i>872</li>
          </ul>
          <p>{{post.excerpt}}</p>
          <nuxt-link :to="'/'+post.type+'/'+post.slug" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Read More</nuxt-link>

        </div>
      </div>

    </div>
  </div>

  </div>

</template>

<script>

export default {
  data(){
      return {
        loading: false

      }
  },
  props: {
    posts: {
      type: Array,
      default: null
    },
    links: {
      type: Array,
      default: null
    }
  },methods: {
    async load(){
      if(this.links && this.links.length > 0)
      {
        let scrollBox = document.getElementById('scrollBox');
        let position = scrollBox.scrollTop;
        this.$loadScrollBar(scrollBox, position)
        this.loading = true;
        await this.$store.dispatch('search/fetchMorePosts', this.links[0]);
        this.loading = false;
        this.$loadScrollBar(scrollBox, position)
      }
    }
  }

}

</script>
