<template>
  <section class="block-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">

          <!-- block content -->
          <div class="block-content">

            <!-- grid box -->
            <div class="grid-box">
              <div class="title-section">
                <h1><span>Author Details</span></h1>
              </div>

              <ul class="autor-list">
                <Detail />
              </ul>
              <Posts />
            </div>
          </div>
        </div>

        <div class="col-sm-4">

          <!-- sidebar -->
          <div class="sidebar">
          <Social />
            <Sideposts />

          </div>


        </div>

      </div>
    </div>


  </section>
</template>
<script>
import Detail from '@/components/author/Authordetail'
import Posts from '@/components/author/Authorposts'
import Social from '@/components/side/Social'
import Sideposts from '@/components/side/Sideposts'


export default {
  components:{
    Detail,
    Posts,
    Social,
    Sideposts
  }
}

</script>
