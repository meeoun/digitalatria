<template>
          <!-- block content -->
          <div class="block-content">

            <!-- grid box -->
            <div class="grid-box">
              <div class="title-section">
                <h1><span>Author List</span></h1>
              </div>


                <AuthorList :authors=authors />

            </div>


          </div>
</template>
<script>
import AuthorList from '@/components/authors/Authorlist'
import Social from '@/components/side/Social'
import Posts from '@/components/side/Sideposts'

export default {
  props: {
    authors: {
      type: Array,
      default: null,
      required: true
    }
  },
  components:{
    AuthorList,
    Social,
    Posts
  }
}

</script>
