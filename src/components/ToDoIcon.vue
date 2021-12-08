<template>
   <svg class="todo-icon" height="16" width="16">
      <circle cx="8" cy="8" r="8" stroke-width="1.5"/>
   </svg>
</template>

<style>

   .todo-icon {
		display: block;
		overflow: visible;
      stroke: #032B43;
      fill: white;
      cursor: pointer;
	}

   .todo-icon circle:hover {
      stroke: #FFBA08;
      transition: ease-in-out 0.15s;
   }

</style>