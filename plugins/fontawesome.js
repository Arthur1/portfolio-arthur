import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)
library.add(faGithub)
library.add(faFacebook)
library.add(faBars)
library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)
