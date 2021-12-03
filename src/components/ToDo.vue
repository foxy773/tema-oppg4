<template>
   <div class="todo">
      <div class="todo__header">
         <div class="todo__title">Things_due</div>
      </div>
      <div class="todo__items-pending">
         <div v-for="task in pendingTasks">
            <div class="task">
               <div class="task__content">
                  <button class="task__done" aria-label="Done" @click="markAsDone(task.id)">O</button>
                  <input class="task__input" type="text" placeholder="New task" v-model="tasks.text">
               </div>
               <button class="task__remove" aria-label="Remove" @click="removeTask(task.id)">Remove</button>
            </div>
         </div>
         <button class="todo__add-new" @click="addTask">Add new +</button>
      </div>
      <div class="todo__divider">Completed</div>
      <div class="todo__items-done">
         <div v-for="task in doneTasks">
            <div class="task">
               <div class="task__content">
                  <button class="task__done" aria-label="Done" @click="markAsDone(task.id)">Ø</button>
                  <input class="task__input" type="text" placeholder="New task" v-model="tasks.text">
               </div>
               <button class="task__remove" aria-label="Remove" @click="removeTask(task.id)">Remove</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         tasks: [
            { id: this.id(), text: 'Pending Task', done: false }
         ],
      }
   },
   computed: {

      pendingTasks() {
         return this.tasks.filter(task => task.done === false);
      },

      doneTasks() {
         return this.tasks.filter(task => task.done === true);
      },
   },
   methods: {
      addTask() {
         this.tasks.push({ id: this.id(), text: 'new task', done: false });
      },

      removeTask(id) {
         const taskIndex = this.tasks.findIndex(task => task.id === id);
         this.tasks.splice(taskIndex, 1);
      },

      markAsDone(id) {
			const taskIndex = this.tasks.findIndex(task => task.id === id)
			this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
      },

      id() {
			return Math.random().toString(36).slice(2);
		},
   }
}
</script>

<style>
   .todo {
      width: 100%;
      height: 100%;
      padding: 3vw;
      overflow-y: scroll;
   }

   .todo__header {
      height: 20%;
   }

   .todo__title {
      font-size: 1.5rem;
   }
 
   .todo__add-new {
      color: gray;
      background: none;
      border: none;
      cursor: pointer;
      margin: 1vh 0vh 0vh 2vh;
   }

   .todo__divider {
      color: gray;
      width: 80%;
      border-bottom: solid gray 1px;
      text-align: end;
      margin: 1vh 0vh 3vh 0vh;
   }

   .task {
      display: flex;
      margin: 0.5vh 0vh 0.5vh 0vh;
   }

   .task__content {
      width: 63%;
      background: white;
      border-radius: 15px;
      display: flex;
      align-items: center;
   }

   .task__done {
      background: none;
      border: none;
      margin-left: 2%;
   }

   .task__input {
      width: 97%;
      background: none;
      border: none;
      margin-left: 1%;
   }

   .task__remove {
      color: gray;
      background: none;
      border: none;
      cursor: pointer;
      margin-left: 1.5vh;
   }

</style>