<template>
  <div>
    <Ticker :news="news" />
    <Headingnews :posts="reviews" />
    <Latestnews />
    <Bottom :popular="popular" :recent="recent" :top="top" />
  </div>
</template>

<script>

import Ticker from '~/components/news/Ticker';
import Headingnews from '~/components/news/Headingnews';
import Latestnews from '~/components/news/Latestnews';
import Bottom from '@/components/bottom/Bottom';
import axios from "axios";

export default {
  components: {
    Ticker,
    Headingnews,
    Latestnews,
    Bottom
  },
  data(){
    return{
      news: '',
      reviews: '',
      popular: '',
      recent: '',
      top: ''
    }
  },
  async asyncData(){
    const [news, reviews,popular, recent, top] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])

    return{
      news: news.data,
      reviews: reviews.data,
      popular: popular.data,
      recent: recent.data,
      top: top.data
    }

  },
}
</script>
