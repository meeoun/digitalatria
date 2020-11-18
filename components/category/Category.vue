<template>
          <!-- block content -->
          <div class="block-content">
            <!-- grid box -->
            <div class="grid-box">
              <CategoryTitle :category=category />
              <CategoryTop :posts=posts />
              <CategoryAdvertisement />
              <CategoryLatest :posts="posts" :links="links" />
            </div>
          </div>
</template>

<script>






export default {

  props: {
    category: {
      type: String,
      default: null
    },
    posts: {
      type: Array,
      default: null
    },
    links: {
      type: Array,
      default: null
    }
  }
}

</script>
