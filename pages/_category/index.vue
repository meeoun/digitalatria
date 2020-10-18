<template>
  <div>
    <Category :category=path :posts="posts" />
  </div>
</template>

<script>

import Category from "@/components/category/Category";
import axios from "axios";


export default {
  props:['category'],
  components: {
    Category
  },
  computed:{
    path: function (){
      return this.$route.fullPath.substring(1)
    }
  },async validate({ params }){
    let allowed =["reviews", "tutorials", "news"]
    return allowed.includes(params.category);
  },
  data(){
    return{
      posts: ''
    }
  },
  async asyncData({$config: { baseURL}, params}){
    const [posts] = await Promise.all([
      axios.get(`${baseURL}/api/posts?published_at!=null&sort_by!=published_at&limit=10&assets&type=${params.category}`),
    ])
    return{
      posts: posts.data.data,
    }

  }


}
</script>
