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
import error from "@/layouts/error";

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
  async asyncData({$config: { baseURL}}){
    const [news, reviews, top] = await Promise.all([
      axios.get(`${baseURL}/api/posts?published_at ne null&sort_by eq published_at&desc&type eq news&limit 10`),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6'),
    ])
    return{
      news: news.data.data.data,
      reviews: reviews.data,
      top: top.data,
    }

  },
}
</script>
