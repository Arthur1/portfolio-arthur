<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Research</h1>
    </div>
    <div class="container">
      <h2 class="headline2">{{ $t('research.interests.title') }}</h2>
      <ul>
        <li>{{ $t('research.interests.list[0]') }}</li>
        <li>{{ $t('research.interests.list[1]') }}</li>
        <li>{{ $t('research.interests.list[2]') }}</li>
      </ul>
      <h2 class="headline2">{{ $t('research.publications.title') }}</h2>
      <ol>
        <li>
          {{ $t('research.publications.list[0]') }}
          <a href="https://ijvr.eu/article/view/3316#IntothewombbornagainAVRexperienceofbeingwarmlyswaddledusingOtonamakifromjapanesemethod" target="_blank" rel="noopener"><font-awesome-icon :icon="['fas', 'link']" />Link</a>
        </li>
        <li>
          {{ $t('research.publications.list[1]') }}
          <a href="http://conference.vrsj.org/ac2019/program/2B.html#2B-04" target="_blank" rel="noopener"><font-awesome-icon :icon="['fas', 'link']" />Link</a>
        </li>
        <li>
          {{ $t('research.publications.list[2]') }}
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Research',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Research',
        },
      ],
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/headline_bg/research.jpg');
}
ol > li {
  margin-bottom: 1rem;
}
</style>
