<template>
  <modal :is-open="isModalOpen">
    <div class="w-full md:w-3xl flex flex-col shadow bg-model bg-no-repeat bg-cover
    border-solid rounded-md
        border border-light-pink">
      <div class="mb-6 flex flex-wrap">
        <div class="w-full mb-14 px-4 pt-14">
        </div>
       <login />
       <signUp />
    </div>
  </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import login from './login.vue'
import signUp from './signUp.vue'
import ModalElement from '~/components/elements/modal.vue'
import { Modal } from '~/types/enums'

export default Vue.extend({
  components: {
    modal: ModalElement,
    login,
    signUp
  },
  computed: {
    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.Login]
    }
  },

  methods: {
    closeModal() {
      this.$accessor.modal.closeModal(Modal.Login)
    },
    handleSignUpClick() {

    },
    handleLoginClick (){

    }
  }
})
</script>
