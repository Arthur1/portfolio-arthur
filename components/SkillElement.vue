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
<style scoped>
.icon {
  margin-right: 0.5em;
}
.icon-good {
  color: #a6e22a;
}
.icon-soso {
  color: #66d9ef;
}
</style>