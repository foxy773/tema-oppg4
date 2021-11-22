<template>
    <div class="component-mount">
        <ContactForm />
        <QuizApp />
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>