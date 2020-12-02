<template>
  <ul v-if="replies.length > 0" class="depth"  v-loading="loading" v-infinite-scroll="load" style="overflow-y: auto; overflow-x: hidden; height: 300px;" id="replyBox"
      element-loading-text="Fetching More Comments...">
    <li v-for="reply in replies" :key="reply.id" >
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
</template>
<script>

export default {

  data() {
    return {
      loading: false,
      reply_links: []
    }
  },
  props: {
    replies:{
      type: Array,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  },mounted() {
    this.reply_links = this.links.filter((link)=>{
      return  !isNaN(link.label) && !link.active
    })
    this.reply_links = this.reply_links.map((link)=>{
      return  link.url
    })
  },
  methods: {
    async load() {
      if (this.reply_links && this.reply_links.length > 0) {
        let scrollBox = document.getElementById('replyBox');
        let position = scrollBox.scrollTop;
        this.$loadScrollBar(scrollBox, position)
        this.loading = true;
        await this.$store.dispatch('posts/fetchMoreReplies', this.reply_links[0]);
        this.reply_links = this.reply_links.filter((item)=>{
          return item !== this.reply_links[0]
        })
        this.loading = false;
        this.$loadScrollBar(scrollBox, position)
      }

    }
  }
}
</script>
