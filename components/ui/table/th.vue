<template>
  <th :class="classes">
    <slot></slot>
  </th>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    right: {
      required: false,
      default: false,
      type: Boolean
    },

    center: {
      required: false,
      default: false,
      type: Boolean
    },

    left: {
      required: false,
      default: false,
      type: Boolean
    },
    
    paddingLeft:{
      required: false,
      default: false,
      type: Boolean
    },
    paddingleft:{
      required: false,
      default: false,
      type: Boolean
    },
    paddingRight:{
      required: false,
      default: false,
      type: Boolean
    },

    width: {
      required: false,
      default: '',
      type: String
    }
  },
  computed: {
    classes(): string {
      const classes = [
        'text-gray-400',
        'text-xs',
        'font-noraml',
        'align-middle',
        'leading-tight',
        'bg-transparent',
        'border-none',
        'select-none',
        'whitespace-nowrap',
        'pt-6',
        'pb-3.5',
        'opacity-70',
        'font-sora',
        'bg-dark-blue',
      ]

      if (this.right) {
        classes.push('text-right')
      } else if (this.center) {
        classes.push('text-center')
      } else if (this.left) {
        classes.push('text-left')
      }
      
      if (this.paddingLeft) {
        classes.push('pl-7')
      }

      if (this.paddingleft) {
        classes.push('pl-16')
      }

      if (this.paddingRight) {
        classes.push('pr-9')
      }

      if (this.width) {
        classes.push(this.width)
      }

      return classes.join(' ')
    }
  }
})
</script>
