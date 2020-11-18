<template>
  <div>

    <Ticker :news="news" />

    <HeadingNews :posts="reviews" />

    <LatestNews :posts="latest" />

  </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  layout: 'front',
  async fetch({store, error}){
    await store.dispatch('posts/fetchNews');
    await store.dispatch('posts/fetchReviews');
    await store.dispatch('posts/fetchLatest');

  },
  computed: mapState({
    news: state => state.posts.news,
    reviews: state => state.posts.reviews,
    latest: state => state.posts.latest
  })
}
</script>
