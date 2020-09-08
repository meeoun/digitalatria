<template>
  <div class="title-post">
    <h1>{{ post.title }}</h1>
    <ul class="post-tags">
      <li><i class="fa fa-clock-o"></i>27 may 2013</li>
      <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
      <li><a href="#"><i class="fa fa-comments-o"></i><span>0</span></a></li>
      <li><i class="fa fa-eye"></i>872</li>
    </ul>
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  },
}
</script>
