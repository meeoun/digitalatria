
<template>
  <div class="comment-area-box">
    <div class="title-section">
      <h1><span>{{count}} Comments</span></h1>
    </div>
    <ul class="comment-tree">
      <li v-for="comment in comments" :key="comment.id">
        <div class="comment-box">
          <img :alt=comment.user.name :src=comment.user.image>
          <div class="comment-content">
            <h4>{{comment.user.name}}<CommentReply :comment="comment" /> </h4>
            <span><i class="fa fa-clock-o"></i>{{comment.dates.created}}</span>
            <p>{{comment.body}}</p>
          </div>
        </div>
        <ul class="depth">
          <li v-for="reply in comment.replies" :key="reply.id">
            <div class="comment-box">
              <img :alt="reply.user.name" :src=reply.user.image>
              <div class="comment-content">
                <h4>{{reply.user.name}}</h4>
                <span><i class="fa fa-clock-o"></i>{{reply.dates.created}}</span>
                <p>{{reply.body}} </p>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>
<script>

export default {
  props: {
    count:{
      type: Number,
      default: 0,
      required: true
    },
    comments: {
      type: Array,
      default: null,
      required: true
    }
  }
}
</script>
