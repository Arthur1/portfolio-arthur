<template>
  <div>
    <div class="logoBox">
      <NuxtLink :to="localePath('/')">
        <img src="@/assets/img/logo.svg" class="logo" alt="Logo of Arthur's Portfolio">
      </NuxtLink>
    </div>
    <div class="siteTitle">
      Arthur's Portfolio
    </div>
    <nav>
      <ul class="linkList">
        <li class="linkList_element">
          <NuxtLink :to="localePath('/biography/')">Biography</NuxtLink>
        </li>
        <li class="linkList_element">
          <NuxtLink :to="localePath('/works/')">Works</NuxtLink>
        </li>
        <li class="linkList_element">
          <NuxtLink :to="localePath('/skills/')">Skills</NuxtLink>
        </li>
        <li class="linkList_element">
          <NuxtLink :to="localePath('/research/')">Research</NuxtLink>
        </li>
        <li class="linkList_element">
          <NuxtLink :to="localePath('/favorites/')">Favorites</NuxtLink>
        </li>
        <li class="linkList_element">
          <a href="https://arthur.hateblo.jp/" target="_blank" rel="noopener">Blog</a>
        </li>
      </ul>
      <div class="langSwitcher" v-if="$i18n.locale === 'ja'">
        <font-awesome-icon icon="globe" /> 日本語 / <NuxtLink :to="switchLocalePath('en')" class="langSwitcher_link">English</NuxtLink>
      </div>
      <div class="langSwitcher" v-else>
        <font-awesome-icon icon="globe" /> <NuxtLink :to="switchLocalePath('ja')" class="langSwitcher_link">日本語</NuxtLink> / English
      </div>
      <ul class="snsList">
        <li class="snsList_element">
          <a href="https://twitter.com/Arthur1__" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li class="snsList_element">
          <a href="https://www.facebook.com/arthur1hope" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li class="snsList_element">
          <a href="https://github.com/Arthur1" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
      </ul>
      <small class="copyright">
        &copy; 2020 Arthur
      </small>
    </nav>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.siteTitle {
  text-align: center;
  font-size: 1.2rem;
  margin: 30px 0 50px;
}

.logoBox {
  width: 70%;
  margin: 60px auto 30px;
  display: none;
  @include mq(lg) {
    display: block;
  }
}
.logo {
  display: block;
  width: 100%;
  max-height: 100px;
}

.langSwitcher {
  margin: 10px 0;
  text-align: center;
  font-size: 1rem;
}
.langSwitcher_link {
  color: $violet;
  text-decoration: none;
  &:hover {
    opacity: 0.75;
  }
}

.linkList {
  width: 85%;
  margin: 30px auto;
}
.linkList_element {
  display: block;
  list-style-type: none;
  text-align: center;
  letter-spacing: 0.13rem;
  border-top: solid 1px white;
  &:last-of-type {
    border-bottom: solid 1px white;
  }
}
.linkList_element > a {
  display: block;
  color: white;
  font-size: 1.4rem;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.1s ease-in;
  padding: 10px;
  &:hover {
    opacity: 0.75;
  }
  &.nuxt-link-exact-active {
    color: $yellow;
  }
}

.snsList {
  width: 70%;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
}
.snsList_element {
  display: block;
  list-style-type: none;
}
.snsList_element > a {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  opacity: 1;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.75;
  }
}
.copyright {
  display: block;
  text-align: center;
}
</style>
