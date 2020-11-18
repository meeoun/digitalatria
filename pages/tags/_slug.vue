<template>
  <div>
    <Category :category=this.$route.params.slug :posts="posts" />
  </div>
</template>

<script>


import {mapState} from "vuex";


export default {
  async fetch({store, error, params}) {

    try {
      await store.dispatch('tags/fetchPosts', params.slug)
    }catch (e) {
      error({
        statusCode: 404,
        message: 'Unable to fetch post'
      })
    }
  },
  computed:{
    ...mapState({
      posts: state => state.tags.posts
    })

  }


}
</script>
