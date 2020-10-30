<template>
  <div>
    <Authors :authors=authors :links="links" />
  </div>
</template>

<script>
import {mapState} from "vuex";


export default {

async fetch({store, error}){
  await store.dispatch('authors/fetchAuthors');

},
computed: mapState({
  authors: state => state.authors.authors,
  links: state=>state.authors.links
})
}
</script>
