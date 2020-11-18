<template>
  <div class="widget text-widget">
    <h1>About</h1>
    <p>{{about }}</p>
  </div>
</template>
<script>

export default {
  props: {
    about:{
      type: String,
      default: null,
    }
  }
}
</script>
