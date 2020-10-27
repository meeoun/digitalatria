<template>
  <div>
    <Authors :authors=authors />
  </div>
</template>

<script>

import Authors from "@/components/authors/Authors";
import {mapState} from "vuex";


export default {
  components: {
    Authors
  },
async fetch({store, error}){
  await store.dispatch('authors/fetchAuthors');

},
computed: mapState({
  authors: state => state.authors.authors
})
}
</script>
