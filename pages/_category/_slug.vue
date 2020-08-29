<template>
  <div>
    <Post :post=post />
  </div>
</template>

<script>

import Post from '~/components/post/Post'
import axios from "axios";


export default {
  data(){
    return {
      post: ''
    }
  },
  components: {
    Post,
  },async asyncData(){
    const [post] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1'),
    ])
    return{
      post: post.data[0],
    }

  }
}
</script>
