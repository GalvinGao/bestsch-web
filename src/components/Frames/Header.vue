<template>
  <div id="header">
    <div class="top-banner"></div>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'home' }">
          <img src="~../../assets/header-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="toggleBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'about' }">
            {{ $t("header.nav.about") }}
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'about' }">
            {{ $t("header.nav.news") }}
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'about' }">
            {{ $t("header.nav.campus") }}
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'about' }">
            {{ $t("header.nav.enrollment") }}
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'about' }">
            {{ $t("header.nav.research") }}
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'about' }">
            {{ $t("header.nav.recruit") }}
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                   data-social-target="http://localhost:4000" target="_blank"
                   href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
                  <span>
                Tweet
              </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary"
                   href="https://github.com/jgthms/bulma/releases/download/0.7.2/bulma-0.7.2.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    name: "Header",
    methods: {
      toggleBurger(sender) {
        // Get the target from the "data-target" attribute
        const target = sender.srcElement.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        sender.srcElement.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      }
    }
  }
</script>

<style scoped>
  .top-banner {
    width: 100%;
    height: 40px;
    background-image: url(~../../assets/header-top-banner.jpg);
  }

  .logo {

  }
</style>
