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
  },async asyncData({error, params}) {
    const [post] = await Promise.all([
      axios.get(`http://localhost/api/posts?slug=${params.slug}`),
    ])
    if(post.data.data.data.length === 0)
    {
      error({statusCode: 404, message: "The server successfully processed the request and is not returning any content."})
    }

    return {
      post: post.data.data.data[0],
    }

  }
}
</script>
