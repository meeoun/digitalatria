<template>
  <div>
    <Author :author="author" />
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  async fetch({store, error, params}) {

    try {
      await store.dispatch('authors/fetchAuthorPosts', params.slug)
    } catch (e) {
      error({
        statusCode: 404,
        message: 'Unable to fetch post'
      })
    }
  }, computed: mapState({
    author: state => state.authors.author
  })
}

</script>
