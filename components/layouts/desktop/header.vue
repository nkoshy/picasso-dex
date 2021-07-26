<template>
  <header
    :class="classes"
  >
    <div :class="aboutHeader ? 'pt-2.5 mr-12' : 'pt-12 pr-20'">
        <img :src="aboutHeader ? `/home/about-header_logo.svg` : `/home/header-logo.svg` " class="cursor-pointer" @click.stop="goHome" />
    </div>
    <div class="hidden xl:flex">
      <div class="header-nav relative px-3 py-2.5 flex">
      <span
        class="
          mr-2
          tracking-wider
          text-md
          flex
          items-center
          select-none
        "
      >
        <span class="text-white group-hover:text-gray-200 font-sora" @click.stop="handleGoToMarket">
          {{ $t('market') }}
        </span>
      </span>
      </div>
    </div>
    <div class="hidden xl:flex">
      <v-spot />
    </div>
    <div class="hidden xl:flex">
      <v-derivatives />
    </div>
    <mobile-menu />
    <div class="hidden xl:flex ml-auto">
      <v-about />
    </div>
    <div class="hidden xl:flex">
      <v-community />
    </div>
    <div class="flex sm:ml-auto xl:ml-0">
      <wallet-connect />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import VSpot from './spot.vue'
import VDerivatives from './derivatives.vue'
import VAbout from './about.vue'
import VCommunity from './community.vue'
// import Logo from '~/components/layouts/logo.vue'
import MobileMenu from '~/components/layouts/mobile/menu.vue'
import WalletConnect from '~/components/wallets/index.vue'

export default Vue.extend({
  components: {
    // Logo,
    VSpot,
    VDerivatives,
    MobileMenu,
    WalletConnect,
    VAbout,
    VCommunity
  },

  props: {
    aboutHeader: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  computed: {
    classes(): string {
      const classes = [
      'w-full',
      'flex',
      'z-30',
      'relative',
      'pl-32',
      'pr-8',
      'pb-4'
      ];

      if(this.aboutHeader) {
        classes.push('pt-4', 'pl-8')
      }

      return classes.join(' ')
    }
  },

  methods: {
    goHome() {
      this.$router.push({ name: 'index' })
    },
    handleGoToMarket() {
      this.$router.push({ name: 'market' })
    }
  }
})
</script>
