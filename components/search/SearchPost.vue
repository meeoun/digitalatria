<template>
  <ul class="autor-list">
  <li v-for="post in posts" :key="post.id">

    <div class="autor-box">

      <img src="/upload/users/avatar1.jpg" alt="">

      <div class="autor-content">

        <div class="autor-title">
          <h1>Post Title</h1>
        </div>

        <p>
          Post Body
        </p>

      </div>

    </div>

    <Tags />

  </li>
  </ul>
</template>

<script>
import Tags from "@/components/search/SearchTags"

export default {
  props:['posts'],
  components:{
    Tags
  }
}

</script>
