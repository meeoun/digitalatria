<template>
  <section class="block-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <!-- block content -->
          <div class="block-content">
            <div class="single-post-box">
              <Title :title=title />
              <Sharepost />
              <Postgallery />
              <Post />

            </div>
          </div>
        </div>
        <div class="col-sm-4">

          <!-- sidebar -->
          <div class="sidebar">
            <Social />

            <Posts />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/post/Title'
import Sharepost from '@/components/post/Sharepost'
import Postgallery from '@/components/post/Postgallery'
import Post from '@/components/post/Postdata'
import Social from '@/components/side/Social'
import Posts from '@/components/side/Sideposts'


export default {
  props: ['title'],
  components:{
    Title,
    Sharepost,
    Postgallery,
    Post,
    Social,
    Posts
  }, mounted() {
    try {
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true
      });

      $('.big-bxslider').bxSlider({
        mode: 'horizontal',
        auto: true
      });

      $('.slider-call').bxSlider({
        pagerCustom: '#bx-pager'
      });

      $('.slider-call2').bxSlider({
        pagerCustom: '#bx-pager2'
      });


    } catch(err) {
    }

  }
}

</script>
