<template>
  <v-ui-card class="h-full">
    <div class="flex flex-col justify-between h-full">
      <div
        v-if="title || $slots['title'] || $slots['title-context']"
        class="
          border-b
          items-center
          flex
          justify-between
          px-4
          h-12
          w-full
          v-panel-title
          bg-light-blue
          rounded-md
        "
      >
        <h4
          class="text-small font-sora text-white"
          :class="!$slots['context'] ? 'w-full' : ''"
        >
          <slot name="title">{{ title }}</slot>
        </h4>
        <slot name="title-context" />
      </div>
      <slot name="context" class="items-center flex justify-between w-full" />
      <div class="flex-1 overflow-y-auto v-panel-content bg-light-purple">
        <slot ref="content" />
      </div>
    </div>
  </v-ui-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: false,
      default: '',
      type: String
    },

    portalName: {
      required: false,
      default: '',
      type: String
    }
  }
})
</script>
