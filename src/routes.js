import Home from './views/Home.vue';
import ContactFormView from './views/ContactFormView.vue';
import SlideshowView from './views/SlideshowView.vue';
import QuizAppView from "./views/QuizAppView.vue";
import SortableTableView from "./views/SortableTableView.vue";

export default [
    { name: 'home', path: '/', component: Home },
    { name: 'contactForm', path: '/contact-form', component: ContactFormView },
    { name: 'slideshow', path: '/slideshow', component: SlideshowView },
    { name: 'quizApp', path: '/quizapp', component: QuizAppView },
    { name: 'sortableTable', path: '/sortable-table', component: SortableTableView },
    { name: 'toDo', path: '/to-do', component: ToDoView }
]