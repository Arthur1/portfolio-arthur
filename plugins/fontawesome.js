import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faFacebook, faPhp, faLaravel, faVuejs, faJs, faPython, faGoogle, faWordpress, faAws, faNodeJs, faHtml5, faCss3Alt, faBootstrap, faDocker } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faLink, faSmile, faMeh, faTint, faCode, faChevronRight, faFileImport, faQuestionCircle, faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = [
    faTwitter,
    faGithub,
    faFacebook,
    faPhp,
    faLaravel,
    faVuejs,
    faJs,
    faPython,
    faGoogle,
    faWordpress,
    faAws,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faDocker,
    faBars,
    faTimes,
    faLink,
    faSmile,
    faMeh,
    faTint,
    faCode,
    faChevronRight,
    faFileImport,
    faQuestionCircle,
    faDatabase,
    faGlobe,
]

for (let icon of icons) {
    library.add(icon)
}

Vue.component('font-awesome-icon', FontAwesomeIcon)

