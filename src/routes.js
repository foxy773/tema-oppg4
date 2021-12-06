import Home from './views/Home.vue';
import ContactFormView from './views/ContactFormView.vue';
import SlideshowView from './views/SlideshowView.vue';

export default [
    {name: 'home', path: '/', component: Home},
    {name: 'contactForm', path: '/contact-form', component: ContactFormView},
    {name: 'slideshow', path: '/slideshow', component: SlideshowView}
]