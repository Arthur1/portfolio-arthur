<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Favorites</h1>
    </div>
    <div class="container">
      <h2 class="headline2">Music</h2>
      <ul>
        <li>Sound Horizon</li>
        <li>フジファブリック</li>
        <li>CAPSULE</li>
      </ul>
      <p>その他、クラブミュージック、80's J-POPを中心に幅広く聴きます</p>
      <h2 class="headline2">Video Games</h2>
      <ul>
        <li>風来のシレン</li>
        <li>MOTHER</li>
        <li>キングダムハーツ</li>
        <li>バンジョーとカズーイの大冒険</li>
      </ul>
      <p>64までの任天堂ハードが好きです</p>
      <h2 class="headline2">Board Games</h2>
      <ul>
        <li>アグリコラ</li>
        <li>グラスロード</li>
        <li>ラブレター</li>
      </ul>
      <p>
        Boîte à Jeuxにおけるアグリコラの最高ELOは1926
      </p>
      <h2 class="headline2">Smartphone Games</h2>
      <ul>
        <li>Shadowverse</li>
        <li>Hearthstone (Battlegrounds)</li>
      </ul>
      <h2 class="headline2">Japanese Idols</h2>
      <ul>
        <li>高山一実 (乃木坂46)</li>
        <li>尾関梨香 (欅坂46)</li>
        <li>丹生明里 (日向坂46)</li>
      </ul>
      <h2 class="headline2">Programming Languages</h2>
      <ul>
        <li>PHP</li>
        <li>Scala</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Favorites'
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHUlEQVQYV2NkYGD4zwABjDACQwCqAKISrAwKwAIAisMEA5Sp5Q4AAAAASUVORK5CYII='), url('~assets/img/bg_favorites.jpg');
}
</style>