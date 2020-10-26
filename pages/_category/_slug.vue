<template>
  <div>
    <Post :post=post />
  </div>
</template>

<script>

import Post from '~/components/post/Post'
import { mapState } from 'vuex'

export default {
  components: {
    Post,
  },
  async fetch({store, error, params}) {

    try {
      await store.dispatch('posts/fetchPost', params)
    }catch (e) {
      error({
        statusCode: 404,
        message: 'Unable to fetch post'
      })
    }
  },computed: mapState({
    post: state => state.posts.post
  })
  ,mounted() {
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
