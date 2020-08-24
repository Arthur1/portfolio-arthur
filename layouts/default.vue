<template>
  <div class="baseWrapper">
    <header class="navBox">
      <nav-pc></nav-pc>
    </header>
    <main class="mainBox">
      <nuxt />
    </main>
  </div>
</template>
<script>
import NavPc from '@/components/NavPc.vue'
export default {
  components: {
    NavPc
  }
}
</script>
<style scoped lang="scss">
$nav-box-width-pc: 330px;
.baseWrapper {
  display: flex;
  position: relative;
}
.navBox {
  position: fixed;
  width: $nav-box-width-pc;
  height: 100vh;
  background: #313131;
  color: white;
}
.mainBox {
  margin-left: $nav-box-width-pc;
  width: calc(100vw - $nav-box-width-pc);
}
</style>