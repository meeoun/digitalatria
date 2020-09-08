<template>
  <div>
    <div class="post-content">
     {{content}}
    </div>



  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}


</script>
