
<template>
   <div class="todo">
      <div class="todo__header">
         <div class="todo__title">Things_due</div>
      </div>
      <div class="todo__content">
         <template v-if="tasks.length > 0 && showSeparateLists">
            <div class="todo__task">
               <ToDoItem
                  @updated-task="storeTasksLocally"
                  @done-task="doneTask"
                  @remove-task="removeTask"
                  v-for="task in pendingTasks"
                  :task="task"
               />
               <button @click="addTask" class="todo__add-new">Add new</button>
            </div>
            <div class="todo__divider" v-if="doneTasks.length > 0 && pendingTasks.length > 0" >Completed</div>
            <div class="todo__task">
               <ToDoItem
                  @updated-task="storeTasksLocally"
                  @done-task="doneTask"
                  @remove-task="removeTask"
                  v-for="task in doneTasks"
                  :task="task"
               />
            </div>
         </template>

         <template v-else>
            <ToDoItem
               @updated-task="storeTasksLocally"
               @done-task="doneTask"
               @remove-task="removeTask"
               v-for="task in pendingTasks"
               :task="task"
            />
            <button @click="addTask" class="todo__add-new">Add new</button>
         </template>
      </div>
   </div>
</template>

<script>
   import ToDoItem from './ToDoItem.vue'

   export default {

      components: {
         ToDoItem
      },

      data() {
         return {
            tasks: [],
            showSeparateLists: true,
         }
      },

      // Påser at alt av data og komponenter er ferdigsatt før siden lastes inn ( slippe at ting lastes inn etter launch )
      created() {
         const localState = this.returnTasksLocally();

         if (localState) {
            this.task = localState
         }
      },

      computed: {

         // Filtrerer alle "task" objekter med verdien false i ".done"til pending.
         pendingTasks() {
            return this.tasks.filter(task => task.done === false);
         },

         // Filtrerer alle "task" objekter med verdien true i ".done" til done.
         doneTasks() {
            return this.tasks.filter(task => task.done === true);
         },
      },

      methods: {

         // Lager og pusher "task" objekt inn i "tasks" listen & lagrer det som stringified JSON lokalt i nettleseren.
         addTask() {
            this.tasks.push({ id: this.id(), text: '', done: false });
            this.storeTasksLocally();
         },

         // Fjerner "task" objekt fra "tasks" listen & lagrer endringen som stringified JSON lokalt i nettleseren.
         removeTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks.splice(taskIndex, 1);
            this.storeTasksLocally();
         },

         // Toggler boolean verdien i tasks.done.
         doneTask(task) {
				const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
				this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
				this.storeTasksLocally();
			},

         // Lager en custom ID til hver "task" som andre funskjoner kan sikte på.
         id() {
            return Math.random().toString(36).slice(2);
         },

         // Etterfølger funksjoner og lagrer endringer som er gjort i form av Stringified JSON lokalt i nettleseren.
         storeTasksLocally() {
            window.localStorage.setItem('class', JSON.stringify(this.Tasks));
         },

         // Konverterer lagrede JSON elementer i det lokale minnet i nettleseren tilbake til aktiv kode.
         returnTasksLocally() {
            return JSON.parse(window.localStorage.getItem('todo__task'))
         }
      }
   }
</script>

<style>
   .todo {
      width: 100%;
      height: 100%;
      background: lightgray;
      padding: 3vw;
   }

   .todo__header {
      height: 20%;
   }

   .todo__title {
      font-size: 1.5rem;
      font-weight: bold;
      font-style: italic;
   }

   .todo__content {
      padding-left: 8%;
      overflow-y: scroll;
   }

   .todo__task {
      font-size: 1.2rem;
   }
 
   .todo__add-new {
      color: gray;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4% 0% 0% 1%;
   }

   .todo__divider {
      color: gray;
      width: 100%;
      border-bottom: solid gray 1px;
      text-align: end;
      margin: 1vh 0vh 3vh 0vh;
      padding-bottom: 1vh;
   }

   @media screen and (max-width: 735px) {
      .todo {
         width: 50%;
      }
   }



</style>