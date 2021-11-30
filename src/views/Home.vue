<template>
    <div class="component-mount">
        <div class="component-mount__contact-form"><ContactForm /></div>
        <div class="component-mount__quiz-app"></div>
        <div class="component-mount__slideshow">slideshow</div>
        <div class="component-mount__sortable-table">sortable table</div>
        <div class="component-mount__todo-list">to-do liste</div>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import QuizApp from '../components/QuizApp.vue';

export default {
    components: {
        ContactForm,
        QuizApp,
    }
}
</script>

<style>
   .component-mount {
        width: 100%;
        height: 115%;
        padding: 2vw 5vw 2vw 5vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: 25px;
        row-gap: 25px;
   }

   .component-mount__contact-form {
       background: lightgray;
   }

   .component-mount__quiz-app {
       background: lightgray;
   }

   .component-mount__slideshow {
       background: lightgray;
   }

   .component-mount__sortable-table {
       background: lightgray;
   }

   .component-mount__todo-list {
       background: lightgray;
   }

   @media screen and (max-width: 1200px) {
       .component-mount {
           grid-template-columns: repeat(2, 1fr);
           grid-template-rows: repeat(3, 1fr);
       }
   }

   @media screen and (max-width: 800px) {
       .component-mount {
           grid-template-columns: 1fr;
           grid-template-rows: repeat(5, 1fr);
       }
   }
</style>