<template>
  <div class="category-posts-head">
    <div class="news-post image-post">
      <img src="/upload/news-posts/im1.jpg" alt="">
      <div class="hover-box">
        <div class="inner-hover">
          <div class="rate-level">
            <p><span>9.2</span> Amazing</p>
          </div>
          <h2><nuxt-link :to="'/'+category+ '/awesome-title'">Awesome Title!</nuxt-link></h2>
          <ul class="post-tags">
            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
            <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
            <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
            <li><i class="fa fa-eye"></i>872</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="news-post image-post">
          <img src="/upload/news-posts/im2.jpg" alt="">
          <div class="hover-box">
            <div class="inner-hover">
              <h2><a href="single-post.html">Donec nec justo eget felis facilisis </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                <li><i class="fa fa-eye"></i>872</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="news-post image-post">
          <img src="/upload/news-posts/im3.jpg" alt="">
          <div class="hover-box">
            <div class="inner-hover">
              <h2><a href="single-post.html">Aliquam porttitor mauris sit amet orci. Aenean dignissim</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                <li><i class="fa fa-eye"></i>872</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Advertisement from '@/components/category/Categoryadvertisement'
import Latest from '@/components/category/Categorylatest'
import Title from '@/components/category/Categorytitle'
import Top from '@/components/category/Categorytop'
import Social from '@/components/side/Social'
import Posts from '@/components/side/Sideposts'


export default {
  props: ['category']
}

</script>
