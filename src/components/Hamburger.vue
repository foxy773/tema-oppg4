<template>
	<div class="hamburger" @click="toggleMenu()">
		<img class="hamburger__image" src="./../../public/assets/header/hamburger-menu.svg" alt="">
		<nav :class="[menuOpen ? 'open' : 'close', 'hamburger__menu']">
        	<ul class="menu__list">

                <li class="list__item" v-for="link in navigation">
						<router-link class="item__link" :to="`${link.pageLink}`">{{ link.pageName }}</router-link>
					</li>
            </ul>	
    	</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuOpen: false,
			navigation: [{ pageName: "Home", pageLink: "/" }, { pageName: "Contact Form", pageLink: "/contact-form" }, { pageName: "QuizApp", pageLink: "/quizapp" }, { pageName: "Slideshow", pageLink: "/slideshow" }, { pageName: "Sortable Table", pageLink: "/sortable-table" }, { pageName: "TodoApp", pageLink: "/to-do" }],
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
	width: 40px;
	height: auto;
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

.menu__list {
	list-style: none;
	text-align: center;
}

.list__item {
	padding: 0.5rem 0;
	font-size: 1.3rem;
}

.item__link {
	width: 100%;
	text-decoration: none;
	display: inline-block;
	color: black;
	padding: 0.4rem 0;
}

.item__link:hover {
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