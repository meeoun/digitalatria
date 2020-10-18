<template>
  <div>
    <Authors :authors=authors />
  </div>
</template>

<script>

import Authors from "@/components/authors/Authors";
import axios from "axios";


export default {
  components: {
    Authors
  },
data(){
  return{
    authors: ''
  }
},
  async asyncData({$config: { baseURL}}){
    const [authors] = await Promise.all([
      axios.get(`${baseURL}/api/authors`),
    ])
    return{
      authors: authors.data.data,
    }

  }
}
</script>
