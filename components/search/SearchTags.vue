<template>
  <div class="autor-last-line">
    <ul class="autor-tags">
      <li v-for="tag in tags" :key="tag.id"><a href="#">News</a></li>
      <li><a href="#">Fashion</a></li>
      <li><a href="#">Politics</a></li>
      <li><a href="#">Sport</a></li>
    </ul>
  </div>
</template>
<script>


export default {
  props:['tags']
}

</script>
