<template>
  <footer>
    <div class="container">
      <div class="footer-widgets-part">
        <div class="row">
          <div class="col-md-3">
            <About />
            <Connected />
          </div>
          <div class="col-md-3">
            <Posts />
          </div>
          <div class="col-md-3">
           <Tags />
            <RSS />
          </div>

          <div class="col-md-3">
          <Photos />
          </div>


        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import About from '@/components/footer/About'
import Connected from '@/components/footer/Connected'
import Posts from '@/components/footer/Footerposts'
import Tags from '@/components/footer/Tags'
import RSS from '@/components/footer/RSS'
import Photos from '@/components/footer/Photos'

export default {
  components:{
    About,
    Connected,
    Posts,
    Tags,
    RSS,
    Photos
  }
}

</script>
