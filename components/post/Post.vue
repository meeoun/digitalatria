<template>

          <!-- block content -->

          <div class="block-content">
            <div class="single-post-box">
              <Title :post=post />

              <Sharepost />
              <PostCarousel :postID="post.id" :caption="post.gallery_caption" />
              <Post :content="post.content" />
              <PostGallery :postID="post.id"  />
              <div v-if="post.type === 'review'">
              <ReviewBox />
              </div>

            </div>
          </div>
</template>

<script>
import Title from '@/components/post/Title'
import Sharepost from '@/components/post/Sharepost'
import PostCarousel from '@/components/post/PostCarousel'
import Post from '@/components/post/Postdata'
import PostGallery from '@/components/post/PostGallery'
import ReviewBox from '@/components/post/ReviewBox'


export default {
  props: {
    post: {
      type: Object,
      default: null,
      required: true
    }
  },
  components:{
    Title,
    Sharepost,
    PostCarousel,
    Post,
    PostGallery,
    ReviewBox
  }
  , mounted() {
    console.log(this.post.review_scores)

  }
}

</script>
