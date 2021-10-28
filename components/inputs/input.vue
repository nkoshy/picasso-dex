<template>
  <div :class="validationClass" class="relative">
    <div class="flex items-center justify-between">
      <label
        v-if="label || error"
        :for="`input-${uid}`"
        class="
          text-xs
          mb-1
          leading-loose
          opacity-40
          flex
          items-center
          justify-between
          font-normal
          font-sora
          text-white
        "
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="label" :class="error ? 'mr-2' : ''" v-html="label"></span>
        <span v-if="error" class="text-red-500 italic font-semibold">
          * {{ error }}
        </span>
      </label>
      <div v-if="$slots['context']">
        <slot name="context" />
      </div>
    </div>
    <div :class="{ 'has-addon': addon || $slots['addon'] }" class="relative rounded-md border border-light-blue-dark border-opacity-50">
      <input
        :id="`input-${uid}`"
        ref="input"
        v-bind="$attrs"
        class="input"
        :class="{
          'input-lg': lg,
          'text-lg': lg,
          'pr-12': maxSelector,
          
        }"
        :value="value"
        @wheel="$event.target.blur()"
        @blur.stop="$emit('blur')"
        @focus="$event.target.select()"
        @input="handleChange"
      />

      <span v-if="addon" class="addon">
        <component :is="addon" />
      </span>

      <span
        v-if="maxSelector"
        class="addon-max cursor-pointer"
        @click.stop="handleMaxSelector"
      >
        <span
          class="px-2 py-1 text-sm font-semibold font-sora bg-light-purple"
        >
          <span v-if="showClose" @click="handleCloseEvent">
            <v-icon-close
              class="cursor-pointer h-4 w-4 text-gray-200 hover:text-primary-500"
            />
          </span>

          <span
            v-if="!isMaxValue && maxSelector"
            class="cursor-pointer"
            @click.stop="handleMaxSelector"
          >
            <span
              class="bg-gray-700 rounded uppercase tracking-1"
              :class="maxClasses"
            >
              {{ $t('max') }}
            </span>
          </span>
          <slot name="addon" />
        </div>
      </div>
      <span
        v-if="error && errorBelow"
        class="text-red-400 italic font-semibold absolute mt-1"
      >
        * {{ error }}
      </span>
    </div>
    
  </div>
  
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { DOMEvent } from '~/types'
import Slider  from './slider.vue'
export default Vue.extend({
  components: {
    'v-slider': Slider
  },
  inheritAttrs: false,

  props: {
    dense: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    },

    round: {
      type: Boolean,
      default: false
    },

    errors: {
      type: Array as PropType<string[]>,
      default: () => []
    },

    maxSelector: {
      type: Boolean,
      default: false
    },

    showClose: {
      type: Boolean,
      default: false
    },

    showCheck: {
      type: Boolean,
      default: false
    },

    valid: {
      type: Boolean,
      default: false
    },

    value: {
      required: true,
      type: [Object, String, Number]
    },

    multiLine: {
      type: Boolean,
      default: false
    },

    errorBelow: {
      type: Boolean,
      default: false
    },

    borderWidth: {
      required: false,
      type: Boolean,
      default: false
    },
    
    borderColor: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    maxClasses(): string[] {
      const { large } = this

      if (large) {
        return ['text-base', 'pr-2']
      }

      return ['px-2', 'py-1', 'mr-2', 'border', 'text-xs']
    },

    classes(): string | null {
      const { large } = this

      const classes = ['w-full ']

      if (large) {
        return 'flex-grow'
      }

      if (this.valid) {
        classes.push('is-valid')
      }

      if (!this.valid && this.errors.length > 0) {
        classes.push('is-invalid')
      }

      return classes.join(' ')
    },

    error(): string | null {
      if (this.errors.length > 0) {
        return this.errors[0]
      }

      return null
    },

    isMaxValue(): boolean {
      const { max } = this.$attrs
      const { value } = this

      return max === value
    }
  },

  methods: {
    handleChangeOnInput(event: DOMEvent<HTMLInputElement>) {
      this.$emit('input', event.target.value)
    },

    handleChange(event: DOMEvent<HTMLSelectElement>) {
      this.$emit('input', event.target.value)
      
    },

    handleCloseEvent() {
      this.$emit('close')
    },

    handleBlur() {
      this.$emit('blur')
    },

    handleMaxSelector() {
      const { maxSelector } = this
      const { max } = this.$attrs
      if (max || maxSelector) {
        if (max) {
          this.handleChangeFromString(max)
        }
        this.$emit('input-max')
      }
    }
  }
})
</script>
