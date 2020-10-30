<template>
          <!-- block content -->
          <div class="block-content">

            <!-- grid box -->
            <div class="grid-box">
              <div class="title-section">
                <h1><span>Author List</span></h1>
              </div>


                <AuthorList :authors=authors :links="links" />

            </div>


          </div>
</template>
<script>

export default {
  props: {
    authors: {
      type: Array,
      default: null
    },
    links: {
      type: Array,
      default: null
    }
  }
}

</script>
