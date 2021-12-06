<template>
   <div class="slideshow">
      <div class="slideshow__images">
         <figure class="slideshow__image">
            <img class="slideshow__img" :src="currentImage.src" :alt="currentImage.name">
            <figcaption class="slideshow__figcaption"> {{ currentImage.caption }} </figcaption>
         </figure>
         <div class="slideshow__controllers">
            <button @click="nextImage" class="slideshow__next">next</button>
            <div class="slideshow__navigation">
               <button @click="goToImage(index)" class="Slideshow__index-button" v-for="(image, index) in images" :aria-label="`Go to image ${index + 1}`">o</button>
            </div>
            <button @click="previousImage" class="slideshow__previous">previous</button>
         </div>
      </div>
   </div>
</template>

<script>

   
   export default {
      data() {
         return {
            index: 0,
            images: [
               { name: 'Birdview', caption: 'Birdview', src: '/assets/slideshow/bird-view.jpg' },
               { name: 'Bridge', caption: 'Bridge', src: '/assets/slideshow/bridge.jpg' },
               { name: 'Street', caption: 'Street', src: '/assets/slideshow/street.jpg' },
               { name: 'Traffic', caption: 'Traffic', src: '/assets/slideshow/traffic.jpg' },
               { name: 'Tall buildings', caption: 'Tall buildings', src: '/assets/slideshow/tall-buildings.jpg' },
            ],
         }
      },

   computed:{

      // Viser nåværende bilde ihht. 'index' verdi i tilknytning med listelengden.
      currentImage() {
         return this.images[this.index];
      }
   },

   methods:{

      // Øker 'index' verdi eller looper tilbake til 0.
      nextImage() {
         this.index = (this.index === this.images.length - 1) ? 0 : this.index + 1;
      },

      // Minsker 'index' verdi eller looper tilbake til liste makslengde.
      previousImage() {
         this.index = (this.index === 0) ? this.images.length - 1 : this.index - 1;
      },

      // Redigerer 'index' verdi med verdien til knappen.
      goToImage(index) {
         this.index = index;
      }
   },
}

</script>

<style>

   .slideshow {
      width: 100%;
      height: 100%;
      position: relative;
   }

   .slideshow__images {
      position: absolute;
   }

   .slideshow___image {
      position: absolute;
   }

   .slideshow__img {
      width: 90%;
      height: auto;
   }


</style>