<template>
          <!-- block content -->
          <div class="block-content">
            <div class="single-post-box">
              <div class="js-toc-content">
              <Title :post=post />
              <SharePost />
              <PostCarousel :images=post.images.carousel :caption=post.gallery_caption />

              <Post :content=post.content />
              </div>
              <PostGallery :images=post.images.gallery  />
              <div v-if="post.type === 'reviews'">
              <ReviewBox :post=post />
              </div>
              <PostTags />
              <MoreAuthor :author=post.author />
              <AlsoLike />
              <CommentBox :count=post.comments :comments=post.comment_data />
            </div>

          </div>

</template>

<script>
import Title from '@/components/post/Title'
import SharePost from '@/components/post/SharePost'
import PostCarousel from '@/components/post/PostCarousel'
import Post from '@/components/post/PostData'
import PostGallery from '@/components/post/PostGallery'
import ReviewBox from '@/components/post/ReviewBox'
import MoreAuthor from "@/components/post/MoreAuthor";
import PostTags from "@/components/post/PostTags"
import AlsoLike from "@/components/post/AlsoLike"
import CommentBox from "@/components/comments/CommentBox"

export default {
  props: {
    post: {
      type: Object,
      default: null,
      required: true
    }
  },
  components:{
    MoreAuthor,
    Title,
    SharePost,
    PostCarousel,
    Post,
    PostGallery,
    ReviewBox,
    PostTags,
    AlsoLike,
    CommentBox
  }

}

</script>
