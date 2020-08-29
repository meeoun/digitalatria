<template>
  <div>
    <Ticker :news="news" />
    <Headingnews :posts="reviews" />
    <Latestnews />
  </div>
</template>

<script>

import Ticker from '~/components/news/Ticker';
import Headingnews from '~/components/news/Headingnews';
import Latestnews from '~/components/news/Latestnews';
import axios from "axios";

export default {
  layout: 'front',
  components: {
    Ticker,
    Headingnews,
    Latestnews
  },
  data(){
    return{
      news: '',
      reviews: '',
      top: ''
    }
  },
  async asyncData(){
    const [news, reviews, top] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
    ])

    return{
      news: news.data,
      reviews: reviews.data,
      top: top.data
    }

  },
}
</script>
