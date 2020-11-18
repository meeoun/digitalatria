<template>
  <div class="title-post">
    <h1>{{ post.title }}</h1>
    <ul class="post-tags">
      <li><i class="fa fa-clock-o"></i>{{post.dates.created}}</li>
      <li><i class="fa fa-user"></i>by <nuxt-link :to="'/authors/'+post.author.slug"> {{post.author.name}}</nuxt-link></li>
      <li><i class="fa fa-comments-o"></i><span>{{post.comments}}</span></li>
      <li><i class="fa fa-eye"></i>{{post.views}}</li>
    </ul>
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  },
}
</script>
