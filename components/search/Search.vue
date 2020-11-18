<template>


    <div class="block-content">
      <!-- grid box -->
      <div class="grid-box">
              <div class="title-section">
                <h1><span>Search Results for - {{filter}}</span></h1>
              </div>
              <SearchPost :posts="posts" :links="links" />
            </div>
    </div>

</template>
<script>

export default {
  props: {
    posts: {
      type: Array,
      default: null
    },links: {
      type: Array,
      default: null
    },
    filter: {
      type: String,
      default: null
    }
  }



}
</script>
