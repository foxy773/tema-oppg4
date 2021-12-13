<template>
    <div class="footer">
        <div class="footer__creatorwrapper">
            <div class="footer__text">
                <div class="footer__forewords">designed &amp; <br> developed by</div>
                <div class="footer__creators">two_handsome_fellas.tmp</div>
            </div>
        </div>
    </div>
</template>

<style>
    .footer  {
        height: 15vh;
        border-top: solid black 1px;
        font-size: 30px;
        background: white;
        bottom: 0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "none, none, creatorwrapper";
    }

    .footer__creatorwrapper {
        grid-area: creatorwrapper;
        text-align: right;
        padding-right: 5vw;
    }

    .footer__text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .footer__forewords {
        font-size: 0.7rem;
        text-transform: uppercase;
        margin-bottom: 1vh;
    }

    .footer__creators {
        font-weight: 900;
        font-style: italic;
        font-size: 0.8rem;
        text-transform: uppercase;
    }

</style>