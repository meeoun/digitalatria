<template>
  <div>
    <Post :title="$route.params.slug"/>
  </div>
</template>

<script>

import Post from '~/components/post/Post'


export default {
  components: {
    Post,
  }
}
</script>
