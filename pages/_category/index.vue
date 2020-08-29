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
  },async validate(){
    let test =["reviews", "tutorials", "news"]
    console.log(this.path)
    return test.includes("reviews");
  }
}
</script>
