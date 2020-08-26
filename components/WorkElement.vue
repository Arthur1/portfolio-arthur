<template>
  <div class="workBox">
    <div class="workBox_child">
      <h2 class="headline2">{{ work.name }}<small class="work_year">[{{ work.year }}]</small></h2>
      <div>
        <dev-badge v-for="devId in work.devs" :devId="devId" :key="devId" />
      </div>
      <p>
        {{ work.description }}
      </p>
      <dl class="work_links">
        <dt v-if="work.url"><font-awesome-icon :icon="['fas', 'link']" /></dt>
        <dd v-if="work.url"><a :href="work.url" target="_blank" rel="noopener">{{ work.url }}</a></dd>
        <dt v-if="work.github"><font-awesome-icon :icon="['fab', 'github']" /></dt>
        <dd v-if="work.github"><a :href="work.github" target="_blank" rel="noopener">{{ work.github }}</a></dd>
      </dl>
    </div>
    <div class="workBox_child">
      <img :src="work.img.src" :width="work.img.width" :height="work.img.height" :alt="`${work.name}の写真`" />
    </div>
  </div>
</template>
<script>
import DevBadge from '@/components/DevBadge.vue'
export default {
  components: { DevBadge },
  props: ['work']
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
.workBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.workBox:nth-of-type(2n) {
  @include mq(lg) {
    flex-direction: row-reverse;
  }
}
.workBox_child {
  width: 100%;
  @include mq(lg) {
    padding: 1rem;
    width: 50%;
  }
}
.workBox_child img {
  max-width: 100%;
  height: auto;
}
.work_year {
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: 1rem;
  color: gray;
}
.work_links {
  display: flex;
  flex-wrap: wrap;
}
.work_links > dt {
  width: 1.5rem;
}
.work_links > dd {
  width: calc(100% - 1.5rem);
}
</style>