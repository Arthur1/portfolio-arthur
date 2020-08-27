<template>
  <li>
    <font-awesome-icon v-if="level === 'good'" class="icon icon-good" :icon="['fas', 'smile']" />
    <font-awesome-icon v-if="level === 'soso'" class="icon icon-soso" :icon="['fas', 'meh']" />
    {{ name }}
  </li>
</template>
<script>
export default {
  props: ['name', 'level'],
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
.icon {
  margin-right: 0.5em;
}
.icon-good {
  color: $green;
}
.icon-soso {
  color: $blue;
}
</style>