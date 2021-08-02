
<template>
  <div class="range-wrap flex items-center relative select-none">
    <input
      
      ref="input"
      class="range"
      type="range"
      v-model="value"
      v-on:change="handleChange"
      min=0
      max=100
    />
    <p>{{ value }}</p>
    <span ></span>
    
  </div>
  
    
</template>

<script lang="ts">
import { BigNumber } from '@injectivelabs/utils'
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input'
  },

  data() {
    return {
      value: 33
    };
  },

  props: {
    value: {
      required: false,
      type: String
    }
  },

  methods: {
    handleChange(e: Event) {
      const value = new BigNumber((e.target as HTMLFormElement).value)
      //console.log(this.$refs.input as HTMLInputElement)
    
      const style=(this.$refs.input as HTMLInputElement)
      style.style.background='linear-gradient(to right, #3617E2 0%, #FC69FB  ' + value + '%, #242257 ' + value + '%, #242257 100%)'
      //style.style.background='linear-gradient(102.23deg, #3617E2 '+(+value-45.68)+'%, #FC69FB '+(+value-147.51)+'% , white 100%)';
      this.$emit('change', style)
      this.$emit('change', value.dp(2, BigNumber.ROUND_HALF_CEIL).toFixed())
    }
  }
})
</script>
