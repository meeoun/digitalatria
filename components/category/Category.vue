<template>
          <!-- block content -->
          <div class="block-content">
            <!-- grid box -->
            <div class="grid-box">
              <Title :category=category />
              <Top :posts=posts />
              <Advertisement />
              <Latest :posts="posts" />
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
  props: ['category', 'posts'],
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
