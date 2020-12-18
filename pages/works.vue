<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Works</h1>
    </div>
    <div class="container">
      <work-element v-for="work in reversedWorks" :key="work.id" :work="work" />
    </div>
  </div>
</template>
<script>
import WorkElement from '@/components/WorkElement.vue'
export default {
  components: { WorkElement },
  head() {
    return {
      title: 'Works',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Works',
        },
      ],
    }
  },
  data() {
    return {
      works: [
        {
          id: 'koudaisai2016',
          year: 2016,
          url: 'https://2016.koudaisai.jp/',
          github: null,
          img: {
            src: require('@/assets/img/works/koudaisai2016.png'),
            width: 1280,
            height: 681
          },
          devs: ['php', 'fuelphp', 'js', 'mysql']
        },
        {
          id: 'koudaisai2017',
          year: 2017,
          url: 'https://2017.koudaisai.jp/',
          github: null,
          img: {
            src: require('@/assets/img/works/koudaisai2017.png'),
            width: 1280,
            height: 678
          },
          devs: ['php', 'fuelphp', 'js', 'mysql']
        },
        {
          id: 'goukakuJizi',
          year: 2017,
          url: 'https://goukaku.jizi.jp/',
          github: null,
          img: {
            src: require('@/assets/img/works/goukaku.png'),
            width: 1280,
            height: 702
          },
          devs: ['php', 'fuelphp', 'mysql']
        },
        {
          id: 'titechAppProject',
          year: 2018,
          url: 'https://titech.app/',
          github: null,
          img: {
            src: require('@/assets/img/works/titech_app_project.png'),
            width: 1280,
            height: 702
          },
          devs: ['js', 'nuxtjs', 'gas', 'aws']
        },
        {
          id: 'buratsukiPortal',
          year: 2018,
          url: null,
          github: 'https://github.com/Arthur1/buratsuki-portal/',
          img: {
            src: require('@/assets/img/works/buratsuki_portal.png'),
            width: 1280,
            height: 699
          },
          devs: ['php', 'fuelphp', 'js', 'mysql', 'docker']
        },
        {
          id: 'agricolaBook',
          year: 2018,
          url: null,
          github: null,
          img: {
            src: require('@/assets/img/works/agricola_book.png'),
            width: 1184,
            height: 682
          },
          devs: ['js', 'vuejs', 'bootstrap']
        },
        {
          id: 'tokyoKoryo',
          year: 2019,
          url: 'https://tokyokoryo.org/',
          github: null,
          img: {
            src: require('@/assets/img/works/tokyo_koryo.png'),
            width: 1280,
            height: 737
          },
          devs: ['php', 'wordpress', 'mysql']
        },
        {
          id: 'internalSpace',
          year: 2019,
          url: 'https://internal-space.com/',
          github: null,
          img: {
            src: require('@/assets/img/works/internal_space.png'),
            width: 1280,
            height: 738
          },
          devs: ['php', 'wordpress', 'mysql']
        },
        {
          id: 'reborn',
          year: 2019,
          url: 'https://internal-space.com/works/rebornvr/',
          github: null,
          img: {
            src: require('@/assets/img/works/reborn.png'),
            width: 962,
            height: 554
          },
          devs: ['gas', 'ifttt', 'js']
        },
        {
          id: 'lifeGame',
          year: 2019,
          url: 'https://arthur1.github.io/sf-lifegame/',
          github: 'https://github.com/Arthur1/sf-lifegame/',
          img: {
            src: require('@/assets/img/works/lifegame.png'),
            width: 1280,
            height: 698
          },
          devs: ['js', 'vuejs']
        },
        {
          id: 'gachiproOfSysimpl',
          year: 2020,
          url: null,
          github: null,
          img: {
            src: require('@/assets/img/works/gachipro_of_sysimpl.png'),
            width: 1280,
            height: 738
          },
          devs: ['scala', 'play', 'js', 'vuejs', 'bootstrap', 'python', 'mysql', 'docker']
        },
        {
          id: 'nationalEconomy',
          year: 2020,
          url: 'https://neo.buratsuki.page/',
          github: 'https://github.com/Arthur1/national-economy2/',
          img: {
            src: require('@/assets/img/works/national_economy.png'),
            width: 1280,
            height: 737
          },
          devs: ['php', 'laravel', 'js', 'vuejs', 'bootstrap', 'mysql', 'redis', 'docker']
        },
        {
          id: 'agriCompanion',
          year: 2020,
          url: null,
          github: 'https://github.com/Arthur1/agricola-companion/',
          img: {
            src: require('@/assets/img/works/agricompanion.jpg'),
            width: 1280,
            height: 737
          },
          devs: ['php', 'laravel', 'js', 'vuejs', 'bootstrap', 'mysql', 'redis']
        },
        {
          id: 'shirenInpasu',
          year: 2020,
          url: 'https://inpasu.buratsuki.page/',
          github: 'https://github.com/Arthur1/shiren-inpasu/',
          img: {
            src: require('@/assets/img/works/shiren_inpasu.png'),
            width: 1920,
            height: 937
          },
          devs: ['js', 'vuejs']
        }
      ]
    }
  },
  computed: {
    reversedWorks() {
      return this.works.reverse()
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/headline_bg/research.jpg');
}
</style>
