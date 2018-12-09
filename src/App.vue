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
  import anime from 'animejs'

  export default {
    name: 'App',
    components: {
      Header
    },
    data() {
      return {
        animationCompleted: false
      }
    },
    methods: {
      beforeEnter () {
        var $el = this.$refs.appRoot
        anime({
          targets: $el,
          scale: [1, 0.9],
          easing: 'easeOutExpo',
          duration: 300,
          complete: function() {
            this.animationCompleted = true
          }
        })
      },
      afterLeave () {
        var $el = this.$refs.appRoot
        if (this.animationCompleted) {
          anime({
            targets: $el,
            scale: [0.9, 1],
            easing: 'easeOutExpo',
            duration: 300,
            complete: function() {
              this.animationCompleted = false
            }
          })
        }

      }
    }
  }
</script>

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