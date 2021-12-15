<template>
   <div class="todo">
      <div class="todo__container">
         <div class="todo__header">
            <div class="todo__title">Things_due</div>
            <div class="todo__subtitle">utlimate taskmanager</div>
         </div>
         
         <div class="todo__content">
            <!-- Two different templates that are used based on the content of 'tasks' list and the objects boolean value of .done. -->
            <template v-if="tasks.length > 0 && showSeparateLists">
               <div class="todo__task">
                  <!-- Nested component that exports events to functions in this component. -->
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
   import ToDoItem from "../components/ToDoItem.vue"

   export default {

      components: {
         ToDoItem
      },

      data() {
         return {
            tasks: [
               { id: this.id(), text: "", done: false }
            ],
            showSeparateLists: true,
         }
      },

      // Makes sure all data and components are loaded completely before the page loads in ( no need to load things in after launch ).
      created() {
         const localState = this.returnTasksLocally();

         if (localState) {
            this.task = localState
         }
      },

      computed: {

         // Filters all "task" objects with the value false in ".done" to pending.
         pendingTasks() {
            return this.tasks.filter(task => task.done === false);
         },

         // Filters all "task" objects with the value true in ".done" to done.
         doneTasks() {
            return this.tasks.filter(task => task.done === true);
         },
      },

      methods: {

         // Creates and pushes "task" objects into "tasks" array & saves it as stringified JSON locally in the browser.
         addTask() {
            this.tasks.push({ id: this.id(), text: "", done: false });
            this.storeTasksLocally();
         },

         // Remove "task" objects form "tasks" array & saves the changes as stringified JSON locally in the browser.
         removeTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks.splice(taskIndex, 1);
            this.storeTasksLocally();
         },

         // Toggles boolean value in tasks.done.
         doneTask(task) {
				const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
				this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
				this.storeTasksLocally();
			},

         // Creates a custom ID for each "task" that other functions can target onto.
         id() {
            return Math.random().toString(36).slice(2);
         },

         // Function that follows other functions and saves changes done in form as stringified JSON locally in the browser.
         storeTasksLocally() {
            window.localStorage.setItem("class", JSON.stringify(this.Tasks));
         },

         // Converts saved JSON elements from local memory in the browser back to active code.
         returnTasksLocally() {
            return JSON.parse(window.localStorage.getItem("todo__task"))
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
      overflow-y: scroll;
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