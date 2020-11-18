<template>


          <!-- block content -->
          <div class="block-content">

            <!-- grid box -->
            <div class="grid-box">

              <ul class="autor-list">
                <AuthorDetail :author="author" />
              </ul>

            </div>
          </div>



</template>
<script>


export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}

</script>
