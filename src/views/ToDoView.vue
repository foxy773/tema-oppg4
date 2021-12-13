<template>
   <div class="todo__mount">
      <ToDo />
   </div>
</template>

<script>
   import ToDo from "../components/ToDo.vue"

   export default {
      components: {
         ToDo
      }
   }
</script>

<style>
   .todo__mount {
      width: 100vw;
      height: 85vh;
   }
</style>