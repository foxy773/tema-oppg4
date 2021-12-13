<template>
   <div class="Slideshow__mount">
      <Slideshow />
   </div>
</template>

<script>
import Slideshow from "../components/Slideshow.vue"

export default {
   components: {
      Slideshow
   }
}
</script>

<style>
   .slideshow__mount {
      position: relative;
   }
</style>