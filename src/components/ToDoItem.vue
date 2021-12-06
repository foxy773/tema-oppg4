<template>
   <div class="task">
      <div class="task__content">
            <button class="task__done" aria-label="Done" @click="markAsDone(task.id)">O</button>
            <input class="task__input" type="text" placeholder="New task" v-model="tasks.text">
      </div>
      <button class="task__remove" aria-label="Remove" @click="removeTask(task.id)">Remove</button>
   </div>
</template>

<script>
   export default {
      data() {
         return {

         }
      },
      computed: {},

      methods: {},
   }
</script>

<style>

</style>