<template>
  <div class="widget posts-widget">
    <h1>Random Post</h1>
    <ul class="list-posts">
      <li v-for="post in posts" :key="post.id">
        <img :src=post.images.main.dimension_80_70.url :alt=post.images.main.dimension_80_70.name>
        <div class="post-content">
          <nuxt-link :to="'/'+post.type+'/'">{{post.type}}</nuxt-link>
          <h2><nuxt-link :to="'/'+post.type+'/'+post.slug">{{post.title}}</nuxt-link></h2>
          <ul class="post-tags">
            <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    posts:{
      type: Array,
      default: null,
    }
  }
}
</script>
