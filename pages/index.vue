<template>
  <div>

    <Ticker :news="news" />

    <HeadingNews :posts="reviews" />

    <Latestnews :posts="latest" />

  </div>
</template>

<script>

import Ticker from '~/components/news/Ticker';
import HeadingNews from '~/components/news/HeadingNews';
import Latestnews from '~/components/news/Latestnews';
import { mapState } from 'vuex'


export default {
  layout: 'front',
  components: {
    Ticker,
    HeadingNews,
    Latestnews
  },
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
