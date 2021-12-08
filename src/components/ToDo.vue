
<template>
   <div class="todo">
      <div class="todo__container">
         <div class="todo__header">
            <div class="todo__title">Things_due</div>
            <div class="todo__subtitle">utlimate taskmanager</div>
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
                  <button @click="addTask" class="todo__add-new">Add new +</button>
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
               <button @click="addTask" class="todo__add-new">Add new +</button>
            </template>
         </div>
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
            tasks: [
               { id: this.id(), text: '', done: false }
            ],
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
      color: #FFBA08;
      background: #032B43;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .todo__container {
      height: 100%;
      width: 80%;
      max-width: 600px;
      padding: 4% 0% 4% 0%;
   }

   .todo__header {
      height: 20%;
      margin-bottom: 5%;
      border-bottom: solid #FFBA08 1px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;

   }

   .todo__title {
      font-size: 2rem;
      font-weight: bold;
      font-style: italic;
      letter-spacing: 0.2rem;
   }

   .todo__subtitle {
      text-transform: uppercase;
      letter-spacing: 0.5vw;
      font-size: 0.8rem;
      font-weight: bold;
      font-style: italic;
      padding-left: 1%;
   }

   .todo__content {
      height: 80%;
      padding: 2% 0% 2% 0%;
      overflow-y: scroll;
   }

   .todo__task {
      font-size: 1.2rem;
   }
 
   .todo__add-new {
      color: #FFBA08;
      font-weight: 500;
      background: none;
      border: solid #FFBA08 1px;
      border-radius: 13px;
      cursor: pointer;
      padding: 0.7% 1.5% 0.7% 2%;
      margin: 4% 0% 4% 0%;
   }

   .todo__add-new:hover {
      color: white;
      font-size: 1rem;
      border: solid white 1px;
      transition: ease-in-out 0.2s;
   }

   .todo__divider {
      width: 100%;
      color: #FFBA08;
      border-bottom: solid #FFBA08 1px;
      font-style: italic;
      font-weight: 600;
      text-align: end;
      margin: 1vh 0vh 3vh 0vh;
      padding-bottom: 1vh;
   }

</style>