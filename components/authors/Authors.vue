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
                <h1><span>Author List</span></h1>
              </div>

              <ul class="autor-list">
                <Authors />
              </ul>
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
import Authors from '@/components/authors/Authorlist'
import Social from '@/components/side/Social'
import Posts from '@/components/side/Sideposts'

export default {
  components:{
    Authors,
    Social,
    Posts
  }
}

</script>
