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
import axios from "axios";

export default {
  layout: 'front',
  components: {
    Ticker,
    HeadingNews,
    Latestnews
  },
  data(){
    return{
      news: '',
      reviews: '',
      latest: ''
    }
  },
  async asyncData({$config: { baseURL }}){
    const [news, reviews, latest, top] = await Promise.all([
      axios.get(`${baseURL}/api/posts?published_at!=null&sort_by!=published_at&limit=10&type=news`),
      axios.get(`${baseURL}/api/posts?published_at!=null&sort_by!=published_at&limit=10&type=reviews`),
      axios.get(`${baseURL}/api/posts?published_at!=null&sort_by!=published_at&limit=10&type=tutorials`)
    ])
    return{
      news: news.data.data,
      reviews: reviews.data.data,
      latest: latest.data.data
    }

  }
}
</script>
