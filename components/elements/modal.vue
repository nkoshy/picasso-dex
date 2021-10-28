<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex flex-col items-center pt-8 lg:pt-16 z-40"
  >
    <div
      class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"
    >
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="fixed inset-0 transition-opacity"
          :aria-hidden="isOpen"
          @click="handleCloseModal"
        >
          <div
            class="absolute inset-0 bg-gray-900 opacity-90 backdrop-filter backdrop-blur-sm"
          />
        </div>
      </transition>

    <transition name="fade-shrink-in" appear>
      <div
        class="
          relative
          w-5/6
          md:w-auto
          max-h-modal
          shadow-inner
          border
          max-w-5xl
          mx-auto
          rounded
          z-20
        "
      >
        <div class="absolute right-10 top-7 -mt-4 -mr-4">
          <button
            v-if="close"
            type="button"
            :class="classes"
            @click.stop="onClose"
          >
            &times;
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isOpen: {
      required: true,
      default: false,
      type: Boolean
    }
  },

    close: {
      required: false,
      default: true,
      type: Boolean
    },
    login: {
       required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    classes(): string {
      const classes = [
            'w-5',
            'h-5',
            'align-middle',
            'rounded-md',
            'shadow-md',
            'bg-dark-blueish',
            'text-light-pink', 
            'leading-none',
            'hover-scale',
            'outline-none',
            'focus:outline-none',
            'bg-close',
            'bg-cover'
      ]
      if (this.login) {
        classes.push('hidden')
      } 
      return classes.join(' ')
    }
  },

  watch: {
    isOpen(newIsOpen: boolean) {
      newIsOpen ? this.handleOnOpen() : this.handleOnClose()
    }
  },

  mounted() {
    this.onEscKeyDown()

    if (this.isOpen) {
      this.handleOnOpen()
    }
  },

  beforeDestroy() {
    document.body.classList.remove('overflow-hidden')
  },

  methods: {
    handleOnOpen() {
      this.isVisibleOnViewport = true
      this.$nextTick(() => {
        document.body.classList.add('overflow-hidden')
      })
    },

    handleOnClose() {
      document.body.classList.remove('overflow-hidden')
      setTimeout(() => {
        this.isVisibleOnViewport = false
      }, 300)
    },

    handleCloseModal() {
      if (this.isOpen) {
        this.$emit('modal-closed')
      }
    },

    handleClickOnCloseButton() {
      this.handleCloseModal()
    },

    onEscKeyDown() {
      const onEscape = (e: KeyboardEvent) => {
        if (this.isOpen && e.keyCode === 27) {
          this.handleCloseModal()
        }
      }

      document.addEventListener('keydown', onEscape)

      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', onEscape)
      })
    }
  }
})
</script>
