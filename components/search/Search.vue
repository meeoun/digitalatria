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
                <h1><span>Search Results</span></h1>
              </div>
              <SearchPost />
            </div>


          </div>
        </div>
        <div class="col-sm-4">

          <!-- sidebar -->
          <div class="sidebar">
            <Social />
            <SidePost />
          </div>

        </div>
      </div>
    </div>
  </section>

</template>
<script>
import SearchPost from '@/components/search/SearchPost';
import SidePost from '@/components/side/Sideposts'
import Social from '@/components/side/Social'


export default {
  components: {
    SearchPost,
    SidePost,
    Social
  }
}
</script>
