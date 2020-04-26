import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VModal from 'vue-js-modal'
Vue.use(VModal)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Font Awesome Vue
import { library } from "@fortawesome/fontawesome-svg-core/"
import { faLinkedin, faGithub, faCss3Alt, faJsSquare, faHtml5, faNodeJs, faVuejs, faAngular, faSass, faWordpress, faNpm } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { dom } from "@fortawesome/fontawesome-svg-core"

dom.watch()

library.add(faLinkedin, faJsSquare, faGithub, faCss3Alt, faHtml5, faVuejs, faNodeJs, faAngular, faWordpress, faSass, faNpm)
Vue.component("font-awesome-icon", FontAwesomeIcon)

// Main SCSS File
import "@/assets/scss/resume.scss"

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')