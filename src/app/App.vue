<template>
    <QuizApp />
</template>

<script>
import ContactForm from "../components/ContactForm.vue"
import QuizApp from "../components/QuizApp.vue"

export default {
    components: {
        ContactForm,
        QuizApp
    }
}
</script>

<style>
    @import '../style/reset.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>