<template>
    <div class="footer">
        <div class="footer__containerWrapper--links">
            <nav class="containerWrapper__navigation">
                <h2 class="navigation__text">LINKS</h2>
                <ul>
                     <li class="navigation__item" v-for="link in navigation">
					    <router-link class="item__nav" :to="`${link.pageLink}`">{{ link.pageName }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="footer__containerWrapper--creator">
            <div class="containerWrapper__text">
                <div class="text__forewords">designed &amp; <br> developed by</div>
                <div class="text__creators">two_handsome_fellas.tmp</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			navigation: [{ pageName: "Home", pageLink: "/" }, { pageName: "Contact Form", pageLink: "/contact-form" }, { pageName: "QuizApp", pageLink: "/quizapp" }, { pageName: "Slideshow", pageLink: "/slideshow" }, { pageName: "Sortable Table", pageLink: "/sortable-table" }, { pageName: "TodoApp", pageLink: "/to-do" }],
		};
	},
};
</script>

<style>
    .footer {
        height: 30vh;
        border-top: solid black 1px;
        font-size: 15px;
        background: white;
        bottom: 0px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 12px 48px;
    }

    .footer__containerWrapper--creator {
        text-align: right;
    }

    .footer__containerWrapper--links {
        width: 100%;
        display: flex;
    }

    .containerWrapper__navigation {
        width: 20%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .navigation__item {
        list-style: none;
    }

    .navigation__text {
        margin: 0 0 10px 0;
    }

    .item__nav {
        width: 100%;
	    text-decoration: none;
	    display: inline-block;
	    color: black;
	    padding: 0.4rem;
    }

    .item__nav:hover {
        background: black;
	    color: white;
	    font-style: italic;
    }

    .containerWrapper__text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .text__forewords {
        font-size: 0.7rem;
        text-transform: uppercase;
        margin-bottom: 1vh;
    }

    .text__creators {
        font-weight: 900;
        font-style: italic;
        font-size: 0.8rem;
        text-transform: uppercase;
    }

</style>