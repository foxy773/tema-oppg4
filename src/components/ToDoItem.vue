<template>
   <div class="task">

      <div :class="`task__content ${task.done ? 'task__content--done' : ''}`">
            <input :ref="task.id" class="task__input" type="text" placeholder="New task" v-model="task.text">
            <button class="task__done" aria-label="Done" @click="emitDone"><ToDoIcon :icon="'done'" /></button>
      </div>

      <button class="task__remove" aria-label="Remove" @click="emitRemove">Remove</button>
   </div>
</template>

<script>
   import ToDoIcon from '../components/ToDoIcon.vue'

   export default {
      props: {
         task: { type: Object }
      },

      components: {
         ToDoIcon
      },

      // Vue queryselector.
      mounted() {
         const input = this.$refs[this.task.id];

         input.focus();
      },

      // Sender input oppdatering aktivt til 'tasks' listen i foreldre-elementet.
      updated() {
         this.$emit('updated-task', this.task);
      },

      methods: {
         // Sender en event ved aktivering til 'doneTask' funksjonen i foreldre-elementet.
         emitDone() {
            this.$emit('done-task', this.task);
         },

         // Sender en event ved aktivering til 'removeTask' funksjonen i foreldre-elementet.
         emitRemove() {
            this.$emit('remove-task', this.task);
         },
      },
   }
</script>

<style>

   .task {
      display: flex;
      margin: 1% 0% 1% 0%;
   }

   .task__content {
      width: 90%;
      height: 11%;
      background: white;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .task__content--done {
      color: blue;
   }

   .task__done {
      background: none;
      border: none;
      margin-right: 0.6%;
   }

   .task__input {
      width: 100%;
      height: 100%;
      font-size: 1.05rem;
      background: none;
      border: none;
      margin-left: 2%;
   }

   .task__remove {
      color: gray;
      background: none;
      border: none;
      cursor: pointer;
      margin-left: 3%;
   }

</style>