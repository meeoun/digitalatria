<template>
  <div>

    <Ticker :news="news" />

    <HeadingNews :posts="reviews" />

    <LatestNews :posts="tutorials" />

  </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  layout: 'front',
  async fetch({store, error}){
    await store.dispatch('posts/fetchFront');
  },
  computed: mapState({
    news: state => state.posts.news,
    reviews: state => state.posts.reviews,
    tutorials: state => state.posts.tutorials
  })
}
</script>
