<template>
  <div class="baseWrapper">
    <header class="navBox" :class="{ 'navBox-isOpen': spMenuIsOpen }">
      <nav-bar />
    </header>
    <main class="mainBox">
      <nuxt />
    </main>
    <div class="toggleButtonBox" :class="{ 'toggleButtonBox-isOpen': spMenuIsOpen }">
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
      spMenuIsOpen: false
    }
  },
  methods: {
    openSpMenu() {
      this.spMenuIsOpen = true
    },
    closeSpMenu() {
      this.spMenuIsOpen = false
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
@import '@/assets/scss/mq.scss';

$nav-box-width-pc: 330px;
.baseWrapper {
  display: flex;
  position: relative;
}

.navBox {
  width: 100vw;
  height: 100vh;
  display: none;
  overflow: hidden;
  position: fixed;
  background: #313131;
  color: white;
  @include mq(lg) {
    display: block;
    width: $nav-box-width-pc;
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
  color: #313131;
  width: 50px;
  height: 50px;
  text-align: right;
  &.toggleButtonBox-isOpen {
    color: white;
  }
  > svg {
    font-size: 2rem;
    cursor: pointer;
  }
  
}

.mainBox {
  margin-left: 0;
  width: 100vw;
  @include mq(lg) {
    margin-left: $nav-box-width-pc;
    width: calc(100vw - $nav-box-width-pc);
  }
}
</style>