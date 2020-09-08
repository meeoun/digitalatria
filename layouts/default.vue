<template>
  <div>
    <Nav />

    <section class="block-wrapper">

      <div class="col-md-1" style="margin-top: 90px">
        <div style="position: fixed" >
          <div class="js-toc"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 js-toc-content">
            <nuxt />
          </div>
          <div class="col-sm-4">

            <!-- sidebar -->
            <div class="sidebar">
              <Social />

              <SidePosts />
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/navigation/Nav'
import Footer from '@/components/footer/Footer'
import SidePosts from '@/components/side/Sideposts'
import Social from '@/components/side/Social'


export default {
  components:{
    Nav,
    Footer,
    SidePosts,
    Social
  },mounted() {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true,

    })
  }

}
</script>


