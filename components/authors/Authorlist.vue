<template>
  <ul class="autor-list">
  <li v-for="author in authors" :key="author.id" >
    <div class="autor-box">

      <img :src=author.image :alt=author.name>

      <div class="autor-content">

        <div class="autor-title">
          <h1><span>{{author.name}}</span><a href="autor-details.html">{{author.posts}} Posts</a></h1>
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
</template>
<script>


export default {
  props: {
    authors: {
      type: Array,
      default: null,
      required: true
    }
  }

}
</script>
