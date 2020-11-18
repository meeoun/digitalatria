<template>
  <div class="widget tags-widget">
    <h1>Tags</h1>
    <ul class="tag-list">
      <li v-for="tag in tags" :key="tag.id"> <nuxt-link :to="'/tags/'+tag.slug">{{tag.name}}</nuxt-link> </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tags:{
      type: Array,
      default: null,
    }
  }
}
</script>
