<template>
  <main id="appRoot" ref="appRoot">
    <Header />
    <transition name="router-transition"
                v-on:before-enter="beforeEnter"
                v-on:after-leave="afterLeave">
      <router-view />
    </transition>
  </main>
</template>

<script>
  import Header from '@/components/Frames/Header'

  export default {
    name: 'App',
    components: {
      Header
    },
    data () {
      return {
        animationCompleted: false
      }
    },
    methods: {
      beforeEnter () {
        var $el = this.$refs.appRoot
        $el.classList.add("is-loading")
      },
      afterLeave () {
        var $el = this.$refs.appRoot
        setTimeout(() => { $el.classList.remove("is-loading") }, 1500)
      }
    }
  }
</script>

<style>
  #appRoot {
    transition: all 625ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .is-loading {
    filter: blur(10px);
    -webkit-transform: scale(.9);
    -moz-transform: scale(.9);
    -ms-transform: scale(.9);
    -o-transform: scale(.9);
    transform: scale(.9);
    transform-origin: top center;
  }
</style>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #8c67ef;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  $navbar-box-shadow-size: 0 4px 8px 0;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>