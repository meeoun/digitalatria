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
  },async asyncData({$config: {baseURL}, error, params}) {
    const [post] = await Promise.all([
      axios.get(`${baseURL}/api/posts?type=${params.category}&slug=${params.slug}`),
    ])
    if(post.data.data.length === 0)
    {
      error({statusCode: 404, message: "The server successfully processed the request and is not returning any content."})
    }
    return {
      post: post.data.data[0],
    }

  },mounted() {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true,

    })
  }, beforeDestroy() {
    tocbot.destroy();
  }
}
</script>
