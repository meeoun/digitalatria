
<template>
  <div class="comment-area-box">
    <div class="title-section">
      <h1><span>{{count}} Comments</span></h1>
    </div>
    <ul class="comment-tree" v-loading="loading" v-infinite-scroll="load" style="overflow-y: auto; overflow-x: hidden; height: 600px;" id="scrollBox"
        element-loading-text="Fetching More Comments...">
      <li v-for="comment in comments" :key="comment.id">
        <div class="comment-box">
          <img :alt=comment.user.name :src=comment.user.image>
          <div class="comment-content">
            <h4>{{comment.user.name}}<CommentReplyForm :comment="comment" :post="post" /> </h4>
            <span><i class="fa fa-clock-o"></i>{{comment.dates.created}}</span>
            <p>{{comment.body}}</p>
          </div>
        </div>
        <CommentReply :replies="comment.reply_data.replies" :links="comment.reply_data.links" />
      </li>
    </ul>
  </div>

</template>
<script>
import {mapState} from "vuex";

export default {
data(){
  return {
    loading: false

  }
},
  computed: mapState({
    comments: state => state.posts.comments,
    count: state => state.posts.comment_count,
    post: state => state.posts.post.id,
    links: state => state.posts.comment_links
  }),
  methods: {
    async load() {
      if (this.links && this.links.length > 0) {
        let scrollBox = document.getElementById('scrollBox');
        let position = scrollBox.scrollTop;
        this.$loadScrollBar(scrollBox, position)
        this.loading = true;
        await this.$store.dispatch('posts/fetchMoreComments', this.links[0]);
        this.loading = false;
        this.$loadScrollBar(scrollBox, position)
      }

    }
  }
}
</script>
