<template>
  <section class="block-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">

          <!-- block content -->
          <div class="block-content">

            <!-- grid box -->
            <div class="grid-box">
              <Title :category=category />
              <Top />
              <Advertisement />
              <Latest />
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
import Advertisement from '@/components/category/Categoryadvertisement'
import Latest from '@/components/category/Categorylatest'
import Title from '@/components/category/Categorytitle'
import Top from '@/components/category/Categorytop'
import Social from '@/components/side/Social'
import Posts from '@/components/side/Sideposts'


export default {
  props: ['category'],
  components:{
    Top,
    Title,
    Advertisement,
    Latest,
    Social,
    Posts
  }
}

</script>
