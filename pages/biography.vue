<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Biography</h1>
    </div>
    <div class="container">
      <h2 class="headline2">略歴</h2>
      <dl class="historyList">
        <dt>2015.03</dt>
        <dd>静岡県立沼津東高等学校 普通科 卒業</dd>
        <dt>2015.04</dt>
        <dd>東京工業大学 第5類 入学</dd>
        <dt>現在</dt>
        <dd>同 工学部 情報工学科 在学中</dd>
      </dl>
      <h2 class="headline2">現所属・役職</h2>
      <ul>
        <li>静岡県東部高等学校軽音楽部 合同発表会 音響チーム</li>
        <li>Titech App Project</li>
      </ul>
      <h2 class="headline2">過去の所属・役職</h2>
      <ul>
        <li>工大祭実行委員会 ネットワーク局</li>
        <li>東京工業大学 情報理工学院 バスゼミスタッフ</li>
        <li>静岡県立沼津東高等学校 海浜教室 助手 (2015-2018)</li>
        <li>第67回香陵祭祭典委員長</li>
        <li>ぬまづたぶろいど。編集長</li>
      </ul>
      <h2 class="headline2">受賞</h2>
      <ul>
        <li>システム構築演習 Webプログラミング成果発表会 チーム「システム構築演習完全に理解した」 最優秀賞 (2020)</li>
        <li>enPiT AiBiC 夏合宿 チーム「C#++」 マホロバマインズ賞／enPiT AiBiC賞／NSSOL賞 (2019)</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Biography'
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/bg_biography.jpg');
}

.historyList {
  display: flex;
  flex-wrap: wrap;
}
.historyList > dt {
  width: 5em;
}
.historyList > dd {
  width: calc(100% - 5em);
}
</style>