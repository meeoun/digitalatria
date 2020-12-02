<template>
  <div v-loading="loading" v-infinite-scroll="load" style="overflow-y: auto; overflow-x: hidden; height: 600px;" id="scrollBox"
       element-loading-text="Fetching More Posts..." class="article-box">
    <div class="title-section">
      <h1><span>Latest Articles</span></h1>
    </div>

    <div v-for="post in posts"  class="news-post article-post infinite-list-item">
      <div class="row">
        <div class="col-sm-4">
          <div class="post-gallery">
            <img :src=post.images.main.dimension_270_150.url :alt=post.images.main.dimension_270_150.name>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="post-content">
            <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
            <ul class="post-tags">
              <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
              <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+post.author.slug">{{post.author.name}} </nuxt-link></li>
              <li><i class="fa fa-comments-o"></i><span>{{post.comments}}</span></li>
              <li><i class="fa fa-eye"></i>{{post.views}}</li>
            </ul>
            <p>{{post.excerpt}}</p>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  props:['posts', 'links'],
  data(){
    return {
      loading: false
    }
  },
  methods: {
  async load(){
    if(this.links && this.links.length > 0)
    {
      let scrollBox = document.getElementById('scrollBox');
      let position = scrollBox.scrollTop;
      this.$loadScrollBar(scrollBox, position);
      this.loading =true;
      await this.$store.dispatch('category/fetchMorePosts', this.links[0]);
      this.loading = false;
      this.$loadScrollBar(scrollBox, position);
    }

  }
}
}

</script>
