<template>
  <div>
<Search :posts="posts" :links="links" :filter=filter />
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  async fetch({store, error, query}) {

    try {
      await store.dispatch('search/searchPosts', query.search)

    }catch (e) {
      error({
        statusCode: 404,
        message: 'Unable to fetch post'
      })
    }
  },
  computed:{
    ...mapState({
      posts: state => state.search.posts,
      links: state => state.search.links,
      filter: state => state.search.filter
    })

  }


}

</script>
