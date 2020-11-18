<template>
  <ul v-loading="loading" v-infinite-scroll="load" style="overflow-y: auto; overflow-x: hidden; height: 600px;" id="scrollBox"
       element-loading-text="Fetching More Posts..." class="autor-list">
  <li v-for="author in authors" :key="author.id"  class="infinite-list-item">
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

    <div class="autor-last-line">
      <ul class="autor-tags">
        <li><span><i class="fa fa-bars"></i>Category</span></li>
        <li v-for="cat in author.types"><nuxt-link :to="'/'+cat">{{cat}}</nuxt-link></li>
      </ul>
    </div>
  </li>
  </ul>
</template>
<script>


export default {
  props: {
    authors: {
      type: Array,
      default: null
    },
    links: {
      type: Array,
      default: null
    }
  },data(){
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
        this.$loadScrollBar(scrollBox, position)
        this.loading =true;
        await this.$store.dispatch('authors/fetchMoreAuthors', this.links[0]);
        this.loading = false;
        this.$loadScrollBar(scrollBox, position)
      }

    }
  }

}
</script>
