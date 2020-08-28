<template>
  <span class="badge" :style="`background: ${dev.bgColor || 'gray'}; color: ${dev.textColor || 'white'};`">
    <font-awesome-icon :icon="dev.icon" class="badge_icon" />{{ dev.label }}
  </span>
</template>
<script>
import devsList from '@/assets/json/devs.json'
export default {
  props: ['devId'],
  data() {
    return {
      devs: devsList
    }
  },
  computed: {
    dev() {
      return this.devs.find(row => row.id == this.devId, this)
    }
  }
}
</script>
<style scoped>
.badge {
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
}
.badge_icon {
  margin-right: 0.3rem;
}
</style>