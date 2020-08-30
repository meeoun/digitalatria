<template>
  <div>
    <Category :category=path />
  </div>
</template>

<script>

import Category from "@/components/category/Category";


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
  }
}
</script>
