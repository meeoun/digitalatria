<template>
  <div>

    <Nav />
    <section class="block-wrapper">
      <div class="col-md-1" style="margin-top: 90px">
        <div style="position: fixed" >
          <div class="js-toc" style="max-width: 240px;"></div>
        </div>
      </div>
      <div class="container">


        <div class="row">
          <div class="col-sm-8">
            <nuxt />
          </div>
          <div class="col-sm-4">

            <!-- sidebar -->
            <div class="sidebar">
              <Social />

              <SidePosts />
              <div class="advertisement">
                <div class="desktop-advert">
                  <span>Welcome!</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


    </section>
    <Footer />
  </div>

</template>
<script>



</script>


