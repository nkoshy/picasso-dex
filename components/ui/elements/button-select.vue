<template>
  <button
    :class="classes"
    type="button"
    @click.stop.prevent="$emit('selected', option)"
  >
    <span class="w-full block">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  model: {
    event: 'selected'
  },

  props: {
    value: {
      required: false,
      default: '',
      type: [String, Number]
    },

    disabled: {
      required: false,
      default: false,
      type: Boolean
    },

    option: {
      required: false,
      default: '',
      type: [Number, String]
    },

    primary: {
      required: false,
      default: false,
      type: Boolean
    },

    accent: {
      required: false,
      default: false,
      type: Boolean
    },

    small: {
      required: false,
      default: false,
      type: Boolean
    },

    halfSmall: {
      required: false,
      default: false,
      type: Boolean
    },

    half: {
      required: false,
      default: false,
      type: Boolean
    },

    full: {
      required: false,
      default: false,
      type: Boolean
    },

    case: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  computed: {
    isActive(): boolean {
      return this.value === this.option
    },

    classes(): string {
      const classes = [
        // 'border',
        // 'border-dark-600',
        // 'first:border-l',
        // 'odd:border-r-0',
        // 'last:border-r',
        'outline-none',
        'focus:outline-none',
        'rounded-md'
       
      ]
      if(this.case){
        classes.push('uppercase')
      }
      if (this.small) {
        classes.push('px-2', 'py-1', 'text-2xs')
        if (!this.isActive) {
          classes.push('text-gray-400', 'hover:text-white')
        }
      } else if (this.half) {
        classes.push('py-2','text-xs', 'w-1/2')
      } else if (this.halfSmall) {
        classes.push('py-1', 'text-xs', 'w-1/2')
      } else if (this.full) {
        classes.push('px-2', 'py-2', 'w-full')
      } else {
        classes.push('px-3', 'py-2', 'text-xs')
      }

      if (this.isActive) {
        if (this.primary) {
          classes.push(
            //'bg-gradient-pink',
            // 'hover:bg-primary-600',
            'primary-btn',
            'text-white',
            'font-bold'
          )
        } else if (this.accent) {
          classes.push( 'primary-btn', 'text-white', 'font-sora')
        } else {
          classes.push('text-light-green', 'font-bold')
        }
      } //else {
      //   classes.push('hover:')
      // }

      if (this.disabled) {
        classes.push('opacity-50', 'pointer-events-none', 'cursor-disabled')
      }

      return classes.join(' ')
    }
  }
})
</script>
