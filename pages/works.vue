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
      title: 'Works'
    }
  },
  data() {
    return {
      works: [
        {
          id: 1,
          name: '工大祭2016公式サイト',
          year: 2016,
          description: '主にバックエンド（認証・各種申請フォームのロジック）を担当。Webパンフレットでは模擬店マップなどのフロントエンドも担当。',
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
          id: 2,
          name: '工大祭2017公式サイト',
          year: 2017,
          description: '参加団体へ提供する企画情報APIの設計、来場者にスマートフォンでグランプリ投票を行ってもらう新システムの実装を担当。',
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
          id: 3,
          name: '工大祭実行委員会受験生応援サイト',
          year: 2017,
          description: '受験生向けの情報を掲載するサイトを新規開設。デザイン、フロントエンド、バックエンドを担当。JavaScriptを使用せずにフロントの実装をした。',
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
          id: 4,
          name: 'Shiren Identifier',
          year: 2018,
          description: 'スーパーファミコンのソフト「風来のシレン」の識別支援ツール。開発のすべてを担当。',
          url: null,
          github: 'https://github.com/Arthur1/shiren-identifier/',
          img: {
            src: require('@/assets/img/works/shiren.png'),
            width: 1280,
            height: 699
          },
          devs: ['js', 'vuejs']
        },
        {
          id: 5,
          name: 'Titech App Project Webサイト',
          year: 2018,
          description: '東工大生向けのアプリ・ツールを開発するサークルのWebサイト。フロントエンドを担当。',
          url: 'https://titech.app/',
          github: null,
          img: {
            src: require('@/assets/img/works/titech_app_project.png'),
            width: 1280,
            height: 702
          },
          devs: ['js', 'vuejs', 'gas', 'aws']
        },
        {
          id: 6,
          name: 'ぶらつき学生ポータル',
          year: 2018,
          description: '拡張デッキ入アグリコラのサークル内向け戦績管理ツール。開発のすべてを担当。',
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
          id: 7,
          name: '教養特論：拡張アグリコラ学 + Randomizer for Agricola',
          year: 2018,
          description: 'ボードゲーム「アグリコラ」の拡張デッキファンブックを自費出版。ゲームマーケット2018秋にて頒布し、110部を完売。読者付録のランダマイザWebアプリも開発した。',
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
          id: 8,
          name: '東京香陵同窓会 Webサイト',
          year: 2019,
          description: '東京香陵同窓会のWebサイトをリニューアルした。',
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
          id: 9,
          name: 'Internal Space Webサイト',
          year: 2019,
          description: 'アート制作グループInternal SpaceのWebサイトを制作した。',
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
          id: 10,
          name: 'Re:born 〜生まれる体験出産VR〜',
          year: 2019,
          description: '第27回国際学生対抗バーチャルリアリティコンテスト出展作品。体験者の顔写真を撮影するデバイス、GANを用いて生成した両親の顔写真を生成するデバイス、生成された画像を表示するデバイスを繋ぐアプリケーションの開発を担当した。',
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
          id: 11,
          name: 'ライフゲームシミュレータ',
          year: 2019,
          description: '工大祭2019 SF研究会講義室企画「人工生命」で展示予定だったもの。展示は令和元年東日本台風の影響で中止。',
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
          id: 12,
          name: '試験日程完全に理解した',
          year: 2020,
          description: 'CSC.T375 システム構築演習にてチーム制作した、東京工業大学の試験日程を閲覧しやすくするWebアプリケーション。プロジェクトマネージャおよびフロントエンドを担当。',
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
          id: 13,
          name: 'National Economy Online',
          year: 2020,
          description: 'Stay Homeプロジェクト第一弾。国産ワカプレボードゲームの傑作、ナショナルエコノミーをオンラインで遊べるWebアプリケーションを開発した。ゲーム工房スパ帝国様の二次利用ガイドラインに準拠。',
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
          id: 14,
          name: 'AgriCompanion',
          year: 2020,
          description: 'Stay Homeプロジェクト第二弾。ボードゲーム「アグリコラ」をオンラインで遊ぶ際に、手札のドラフトや管理が行えるWebアプリケーションを開発した。WebSocketを利用してリアルタイムに更新される。',
          url: null,
          github: 'https://github.com/Arthur1/agricola-companion/',
          img: {
            src: require('@/assets/img/works/agricompanion.jpg'),
            width: 1280,
            height: 737
          },
          devs: ['php', 'laravel', 'js', 'vuejs', 'bootstrap', 'mysql', 'redis']
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