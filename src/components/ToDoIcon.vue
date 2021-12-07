<template>
   <svg height="16" width="16">
      <circle cx="8" cy="8" r="6" stroke="red" stroke-width="1.5" fill="none" />
   </svg>
</template>

<script>
export default {
   props: {
      icons: { type: String }
   }
}
</script>

<style>

   .todo-icon {
		width: 30%;
		height: 30%;
		display: block;
		overflow: visible;
	}

	.todo-icon line,
   .todo-icon circle {
		stroke: var(--foreground);
	}
</style>