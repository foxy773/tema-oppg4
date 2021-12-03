<template>
    <div class="header">
        <div class="header__logowrapper">
            <div class="header__logowrapper__logo">the lab</div>
            <div class="header__logowrapper__subtext">
                <div class="header__logowrapper__subtext__catchfrase">a collection <br> of custom components</div>
                <div class="header__logowrapper__subtext__version">THELAB_V1.exe</div>
            </div>
        </div>
    </div>
</template>

<style>
    .header  {
        font-size: 30px;
        height: 12vh;
        background:white;
        border-bottom: solid black 1px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-areas:
        "logo logo logo none none none none"
    }

    .header__logowrapper {
        grid-area: logo;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .header__logowrapper__logo {
        font-size: 8vh;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 4px;
        text-transform: uppercase;
        margin-left: 5vw;
    }

    .header__logowrapper__subtext {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 3vw;
    }

    .header__logowrapper__subtext__catchfrase {
        font-size: 0.7rem;
        text-transform: uppercase;
    }

    .header__logowrapper__subtext__version {
        font-weight: 900;
        font-style: italic;
        font-size: 0.8rem;
        text-transform: uppercase;
    }

    /* mindre nettbrett */
    @media screen and (max-width: 735px) {
    .header {
        grid-template-columns: repeat(7, 1fr);
        grid-template-areas:
        "logo logo logo logo logo logo none"
        }
    }

</style>