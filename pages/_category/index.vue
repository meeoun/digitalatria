<template>
  <div>
    <Category :category=path :posts="posts" />
  </div>
</template>

<script>

import Category from "@/components/category/Category";
import {mapState} from "vuex";


export default {
  props:['category'],
  components: {
    Category
  },
async fetch({store, error, params}) {

  try {
    await store.dispatch('category/fetchPosts', params)
  }catch (e) {
    error({
      statusCode: 404,
      message: 'Unable to fetch post'
    })
  }
},
  computed:{
    path: function (){
      return this.$route.fullPath.substring(1)
    },
    ...mapState({
      posts: state => state.category.posts
    })

  },async validate({ params }){
    let allowed =["reviews", "tutorials", "news"]
    return allowed.includes(params.category);
  }


}
</script>
