import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faLink, faSmile, faMeh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = [
    faTwitter,
    faGithub,
    faFacebook,
    faBars,
    faTimes,
    faLink,
    faSmile,
    faMeh,
]

for (let icon of icons) {
    library.add(icon)
}

Vue.component('font-awesome-icon', FontAwesomeIcon)

