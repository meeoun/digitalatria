<template>
  <div>
    <Ticker :news="news" />
    <HeadingNews :posts="reviews" />
    <Latestnews />
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
      top: ''
    }
  },
  async asyncData({$config: { baseURL}}){
    const [news, reviews, top] = await Promise.all([
      axios.get(`${baseURL}/api/posts?published_at!=null&sort_by!=published_at&limit=10&type=news`),
      axios.get(`${baseURL}/api/posts?published_at!=null&sort_by!=published_at&limit=10&type=reviews`),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6'),
    ])
    return{
      news: news.data.data.data,
      reviews: reviews.data.data.data,
      top: top.data,
    }

  },
}
</script>
