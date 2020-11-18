<template>
  <div class="post-tags-box">
    <ul class="tags-box">
      <li><i class="fa fa-tags"></i><span>Tags:</span></li>
      <li v-for="tag in tags" :key="tag.id"> <nuxt-link :to="'/tags/'+tag.slug">{{tag.name}}</nuxt-link> </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}

</script>
