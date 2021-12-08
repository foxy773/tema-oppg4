<template>
   <div class="contact-form__mount">
      <ContactForm />
   </div>
</template>

<script>

import ContactForm from '../components/ContactForm.vue'

export default {
   components: {
      ContactForm
   }
}

</script>

<style>
   .contact-form__mount {
      width: 100vw;
      height: 85vh;
   }
</style>