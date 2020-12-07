<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Favorites</h1>
    </div>
    <div class="container">
      <h2 class="headline2">{{ $t('favorites.music.title') }}</h2>
      <ul>
        <li>{{ $t('favorites.music.list[0]') }}</li>
        <li>{{ $t('favorites.music.list[1]') }}</li>
        <li>{{ $t('favorites.music.list[2]') }}</li>
      </ul>
      <p>{{ $t('favorites.music.description') }}</p>
      <h2 class="headline2">{{ $t('favorites.videoGames.title') }}</h2>
      <ul>
        <li>{{ $t('favorites.videoGames.list[0]') }}</li>
        <li>{{ $t('favorites.videoGames.list[1]') }}</li>
        <li>{{ $t('favorites.videoGames.list[2]') }}</li>
        <li>{{ $t('favorites.videoGames.list[3]') }}</li>
      </ul>
      <p>{{ $t('favorites.videoGames.description') }}</p>
      <h2 class="headline2">{{ $t('favorites.boardGames.title') }}</h2>
      <ul>
        <li>{{ $t('favorites.boardGames.list[0]') }}</li>
        <li>{{ $t('favorites.boardGames.list[1]') }}</li>
        <li>{{ $t('favorites.boardGames.list[2]') }}</li>
      </ul>
      <p>{{ $t('favorites.boardGames.description') }}</p>
      <h2 class="headline2">{{ $t('favorites.smartphoneGames.title') }}</h2>
      <ul>
        <li>{{ $t('favorites.smartphoneGames.list[0]') }}</li>
        <li>{{ $t('favorites.smartphoneGames.list[1]') }}</li>
      </ul>
      <h2 class="headline2">{{ $t('favorites.japaneseIdols.title') }}</h2>
      <ul>
        <li>{{ $t('favorites.japaneseIdols.list[0]') }}</li>
        <li>{{ $t('favorites.japaneseIdols.list[1]') }}</li>
        <li>{{ $t('favorites.japaneseIdols.list[2]') }}</li>
      </ul>
      <h2 class="headline2">{{ $t('favorites.programmingLanguages.title') }}</h2>
      <ul>
        <li>PHP</li>
        <li>Scala</li>
        <li>ES2015</li>
      </ul>
      <h2 class="headline2">{{ $t('favorites.misc.title') }}</h2>
      <ul>
        <li>{{ $t('favorites.misc.list[0]') }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Favorites',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Favorites',
        },
      ],
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/headline_bg/favorites.jpg');
}
</style>
