<template>
  <div class="baseWrapper">
    <header class="navBox" :class="{ 'navBox-isOpen': spMenuIsOpen }">
      <nav-bar />
    </header>
    <main class="mainBox">
      <nuxt />
    </main>
    <div class="toggleButtonBox" :class="{ 'toggleButtonBox-isOpen': spMenuIsOpen, 'openButtonBox-black': openButtonIsBlack }">
      <font-awesome-icon v-if="spMenuIsOpen" :icon="['fas', 'times']" @click="closeSpMenu" />
      <font-awesome-icon v-else :icon="['fas', 'bars']" @click="openSpMenu" />
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'defaultLayout',
  components: {
    NavBar
  },
  data() {
    return {
      spMenuIsOpen: false,
      openButtonIsBlack: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateOpenButtonIsBlack)
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateOpenButtonIsBlack)
  },
  methods: {
    openSpMenu() {
      this.spMenuIsOpen = true
    },
    closeSpMenu() {
      this.spMenuIsOpen = false
    },
    updateOpenButtonIsBlack() {
      this.openButtonIsBlack = window.scrollY > 175
    }
  },
  watch: {
    $route(to, from) {
      this.closeSpMenu()
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.baseWrapper {
  display: flex;
  position: relative;
}

.navBox {
  width: 100%;
  height: 100vh;
  display: none;
  overflow: hidden;
  position: fixed;
  background: $gray;
  color: white;
  @include mq(lg) {
    display: block;
    width: 330px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, .8);
  }
  &.navBox-isOpen {
    display: block;
  }
}

.toggleButtonBox {
  position: fixed;
  display: block;
  @include mq(lg) {
    display: none;
  }
  right: 20px;
  top: 20px;
  color: white;
  width: 50px;
  height: 50px;
  text-align: right;
  > svg {
    font-size: 2rem;
    cursor: pointer;
  }
  &:not(.toggleButtonBox-isOpen).openButtonBox-black {
    color: #313131;
  }
}

.mainBox {
  margin-left: 0;
  width: 100%;
  min-height: 100vh;
  background: $off-white;
  @include mq(lg) {
    margin-left: 330px;
    width: calc(100% - 330px);
  }
}
</style>