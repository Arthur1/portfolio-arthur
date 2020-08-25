<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Research</h1>
    </div>
    <div class="container">
      <h2 class="headline2">Interests</h2>
      <ul>
        <li>自然言語</li>
        <li>ボードゲームAI</li>
        <li>Webを置き換える新たなメディア</li>
      </ul>
      <h2 class="headline2">Publications</h2>
      <ol>
        <li>
          Shoko Kimura, Ayaka Fujii, Kenichi Ito, Kazuki Asakura, Rihito Tsuboi and Kazunori Miyata. Into the Womb -Born Again- A VR Experience of Being Warmly Swaddled Using "Otonamaki" from Japanese Method. ConVRgence (VRIC) Virtual Reality International Conference 2020, pages 169-171, April 2020.
          <a href="https://ijvr.eu/article/view/3316#IntothewombbornagainAVRexperienceofbeingwarmlyswaddledusingOtonamakifromjapanesemethod" target="_blank" rel="noopener"><font-awesome-icon :icon="['fas', 'link']" />Link</a>
        </li>
        <li>
          木村 正子, 藤井 綺香, 星 宏侑, 田丸 黎, 宮内 涼将, 朝倉 一希, 鈴木 章大, 坪井 理人. Re:born 〜生まれる体験出産VR〜. 日本バーチャルリアリティ学会大会論文集, 24:2B-04, 2019年9月.
          <a href="http://conference.vrsj.org/ac2019/program/2B.html#2B-04" target="_blank" rel="noopener"><font-awesome-icon :icon="['fas', 'link']" />Link</a>
        </li>
        <li>
          朝倉 一希. カラオケで人気な曲の歌詞の表現特性. [LAH.T210]言語学B ポスターセッション, 2019年7月.
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Research'
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/bg_research.jpg');
}
ol > li {
  margin-bottom: 1rem;
}
</style>