<template>
	<div class="hamburger" @click="toggleMenu()">
		<img class="hamburger__image" src="./../../public/assets/header/hamburger-menu.svg" alt="">
		<nav :class='[menuOpen ? "open" : "close", "hamburger__menu"]'>
                <ul class="hamburger__menu__list">
                    <li class="list__item">
							  <a class="list__item__link" href="/">Home</a>
							  </li>
                    <li class="list__item">
							  <a class="list__item__link" href="/contact-form">Contact Form</a>
							  </li>
						  <li class="list__item">
							  <a class="list__item__link" href="/quizapp">QuizApp</a></li>
                    <li class="list__item">
							  <a class="list__item__link" href="/slideshow">slideshow</a>
						  </li>
						  <li class="list__item">
							  <a class="list__item__link" href="/sortable-table">Sortable Table</a>
							  </li>
						  <li class="list__item">
							  <a class="list__item__link" href="/to-do">TodoApp</a>
							  </li>
                </ul>
            </nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuOpen: false
		};
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen
		}
	},
};
</script>


<style>
.hamburger {
	display: flex;
	background: white;
	position: relative;
}

.hamburger__image {
	display: flex;
	align-self: center;
	width: 50px;
	height: auto;
	height: auto;
	position: absolute;
	cursor: pointer;
}

.hamburger__menu {
	display: flex;
	flex-direction: column;
	position: absolute;
	background: white;
	border: 2px solid black;
	width: 300px;
	transition: top 200ms ease-in-out;
	padding: 1rem;
	z-index: 99;
	left: -250px;
}

.hamburger__menu__list {
	list-style: none;
	text-align: center;
}

.list__item {
	padding: 0.5rem 0;
	font-size: 1.3rem;
}

.list__item__link {
	width: 100%;
	text-decoration: none;
	display: inline-block;

	color: black;
	padding: 0.4rem 0;
}

.list__item__link:hover {
	background: black;
	color: white;
	font-style: italic;
}




/*Utility*/
.open {
	opacity: 1;
	top: 50px;
}

.close {
	pointer-events: none;
	opacity: 0;
}
</style>