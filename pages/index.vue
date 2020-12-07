<template>
  <div class="eyeCatch">
    <div class="eyeCatch_logo">
      <img src="@/assets/img/logo.svg" class="eyeCatch_logo_img" alt="Logo of Arthur's Portfolio" width="407" height="127">
      <div class="eyeCatch_logo_text">Arthur's Portfolio</div>
    </div>
    <div class="eyeCatch_text">
      La mélancolie n'est que de la ferveur retombée.<br>
      ──André Paul Guillaume Gide
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Arthur\'s Portfolio',
      titleTemplate: '',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Arthur\'s Portfolio',
        },
      ],
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.eyeCatch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/headline_bg/skills.jpg');
  background-repeat: repeat;
  background-blend-mode: overlay;
  background-position: 0;
  background-size: auto, cover;
}
.eyeCatch_text {
  color: white;
  text-align: center;
  font-size: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, .5);
  @include mq(lg) {
    font-size: 1.5rem;
  }
}
.eyeCatch_logo {
  display: block;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, .5);
  // margin-bottom: 2rem;
  padding: 2rem;
  @include mq(lg) {
    display: none;
  }
}
.eyeCatch_logo_img {
  width: 100%;
}
.eyeCatch_logo_text {
  margin-top: 1rem;
}
</style>
