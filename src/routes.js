import Home from './views/Home.vue';
import ContactFormView from './views/ContactFormView.vue'

export default [
    {name: 'home', path: '/', component: Home},
    {name: 'contactForm', path: '/contact-form', component: ContactFormView}
]