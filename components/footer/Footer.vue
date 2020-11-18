<template>
  <footer>
    <div class="container">
      <div class="footer-widgets-part">
        <div class="row">
          <div class="col-md-3">
            <FooterAbout :about="about" />
          </div>
          <div class="col-md-3">
            <FooterPosts :posts="posts" />
          </div>
          <div class="col-md-3">
           <FooterTags :tags="tags" />
          </div>

          <div class="col-md-3">
          <FooterPhotos :images="images" />
          </div>


        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import {mapState} from "vuex";

export default {
  computed: mapState({
    about: state => state.layout.about,
    posts: state => state.layout.footerPosts,
    tags: state => state.layout.footerTags,
    images: state => state.layout.footerImages
  })
}

</script>
