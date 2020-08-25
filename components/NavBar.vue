<template>
  <div>
    <div class="logoBox">
      <nuxt-link to="/">
        <img src="@/assets/img/logo.svg" class="logo">
      </nuxt-link>
    </div>
    <div class="siteTitle">
      Arthur's Portfolio
    </div>
    <nav>
      <ul class="linkList">
        <li class="linkList_element"><nuxt-link to="/biography">Biography</nuxt-link></li>
        <li class="linkList_element"><nuxt-link to="/works">Works</nuxt-link></li>
        <li class="linkList_element"><nuxt-link to="/skills">Skills</nuxt-link></li>
        <li class="linkList_element"><nuxt-link to="/research">Research</nuxt-link></li>
        <li class="linkList_element"><nuxt-link to="/favorites">Favorites</nuxt-link></li>
      </ul>
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
          <a href="https://github.com/Arthur1/" target="_blank" rel="noopener">
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
  margin: 30px 0 60px;
}

.logoBox {
  width: 70%;
  margin: 60px auto 30px;
}
.logo {
  display: block;
  width: 100%;
  max-height: 100px;
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
    color: #e6db74;
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