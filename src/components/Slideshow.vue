<template>
   <div class="slideshow">
      <div class="slideshow__container">
         <div class="slideshow__controllers">
            <div class="slideshow__index-controller">
               <!-- Loops a button with a click-event function that navigates to the image with coresponding index as the button.  -->
               <button @click="goToImage(index)" class="Slideshow__index-button" v-for="(image, index) in images" :aria-label="`Go to image ${index + 1}`">
                  <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.32 0H26L17.68 15H0L8.32 0Z" fill="#EDEDED"/>
                  </svg>
               </button>
            </div>

            <div class="slideshow__binary-controller">
               <button @click="previousImage" class="slideshow__previous">previous</button>

               <button @click="nextImage" class="slideshow__next">next</button>
            </div>
         </div>

         <div class="slideshow__images">
            <div class="slideshow__name"> {{ currentImage.name }} </div>

            <figure class="slideshow__image">
               <img class="slideshow__img" :src="currentImage.src" :alt="currentImage.name">
               
               <figcaption class="slideshow__figcaption"> {{ currentImage.caption }} </figcaption>
            </figure>
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
               { name: "Birdview", caption: "Birdview", src: "/assets/slideshow/bird-view.jpg" },
               { name: "Bridge", caption: "Bridge", src: "/assets/slideshow/bridge.jpg" },
               { name: "Street", caption: "Street", src: "/assets/slideshow/street.jpg" },
               { name: "Traffic", caption: "Traffic", src: "/assets/slideshow/traffic.jpg" },
               { name: "Tall buildings", caption: "Tall buildings", src: "/assets/slideshow/tall-buildings.jpg" },
            ],
         }
      },

   computed:{
      // Shows image from array according to current index.
      currentImage() {
         return this.images[this.index];
      }
   },

   methods:{
      // Increases 'index' value with +1 or loops back to 0 after reaching total arraylength.
      nextImage() {
         this.index = (this.index === this.images.length - 1) ? 0 : this.index + 1;
      },

      // Decreases 'index' value with -1 or loops back to total arraylength after reaching 0.
      previousImage() {
         this.index = (this.index === 0) ? this.images.length - 1 : this.index - 1;
      },

      // Edits 'index' value to the same indexvalue of the looping buttons.
      goToImage(index) {
         this.index = index;
      }
   },
}
</script>

<style>
   /*********** 1.0 Base ************/

   .slideshow {
      width: 100%;
      height: 100%;
      display: flex;
   }

   .slideshow___container {
      width: 80%;
      height: 100%;
      position: relative;
      max-width: 600px;
   }

   /*********** 2.0 Controllesrs ************/

   /* 2.1 Main */

   .slideshow__controllers {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 14;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 6%;
   }
   
   /* 2.2 Index */

   .slideshow__index-controller {
      padding-bottom: 1rem;
   }

   .Slideshow__index-button {
      background: none;
      border: none;
      cursor: pointer;
   }

   .Slideshow__index-button path:hover {
      fill:blue;
   }

   /* 2.2 Binary */

   .slideshow__binary-controller {
      width: 12.5rem;
      display: flex;
      justify-content: space-between;
   }

   .slideshow__next {
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.4rem 0.3rem 0.2rem 1rem;
      border: none;
   }

   .slideshow__previous {
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.4rem 1rem 0.2rem 0.3rem;
      border: none;
   }

   .slideshow__next:hover {
      color: white;
      background: blue;
      padding: 0.4rem 1rem 0.2rem 0.3rem;
      transition: 0.2s;
   }

   .slideshow__previous:hover {
      color: white;
      background: blue;
      padding: 0.4rem 0.3rem 0.2rem 1rem;
      transition: 0.2s;
   }

   /*********** 3.0 Images ************/

   .slideshow__images {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 10;
      background: black;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .slideshow__name {
      position: absolute;
      z-index: 16;
      color: white;
      font-size: 1.4rem;
      font-weight: bold;
      font-style: italic;
      letter-spacing: 0.2rem;
      text-shadow: 0px 0px 8px black;
   }

   .slideshow___image {
      width: 100%;
      height: 100%;
      position: absolute;
   }

   .slideshow__img {
      width: auto;
      height: 100%;
      object-fit: contain;
   }

   .slideshow__figcaption {
      display: none;
   }
</style>