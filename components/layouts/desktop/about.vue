<template>
  <div class="header-nav relative">
    <div
      :class="isDropdownOpen ? 'is-active' : ''"
      class="w-full h-full py-2 flex px-3 items-center cursor-pointer group"
      @click="toggleDropdown"
    >
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
        <span class="text-white group-hover:text-gray-200 font-sora">
          {{ $t('about') }}
        </span>
      </span>
      <v-ui-icon
        :icon="Icon.Dropdown"
        xs
        class="text-gray-500 group-hover:text-gray-300"
      />
    </div>
    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        v-on-clickaway="closeDropdown"
        class="
          absolute
          -mx-px
          flex
          justify-center
          flex-wrap
          top-12
          -left-20
          mt-12
          bg-about-pattern
          bg-no-repeat
        "
      >
        <div class="pt-8 pr-10 pb-20 p-3.5 w-48 flex">
          <div>
            <img :src="'/home/blog.svg'" />
          </div>
          <div class="ml-3">
            <p class="font-sora text-sm text-white">Blog</p>
            <p class="font-sora text-xsm mt-2 text-white opacity-40">Read more about us</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway'
import { Icon } from '~/types'

export default Vue.extend({
  directives: {
    onClickaway
  },

  data() {
    return {
      Icon,
      isDropdownOpen: false
    }
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },

    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false
      }
    }
  }
})
</script>
