<template>
  <div class="w-full mb-2 lg:w-1/2 pl-11 pr-6">
    <h3 class="text-center text-sm font-sora text-white font-noraml">
      {{ $t('login') }}
    </h3>
      <v-input
      v-model="form.email"
      :placeholder="$t('email_id')"
      class="mt-4"
      type="text"
      />
      <v-input
      v-model="form.password"
      :placeholder="$t('password')"
      class="mt-4"
      type="password"
      />
    <div class="w-full mx-auto mt-4">
      <v-ui-button
        :status="status"
        full
        primary
        @click.stop="onSubmit"
      >
        {{ $t('login') }}
      </v-ui-button>
    </div>
  </div>
</template>

<script>
import { Modal } from '~/types/enums';
import {fetchPassword} from '~/app/services/authenticate'


export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
   async onSubmit() {
        if (this.form.email && this.form.password) {
        // const userData = JSON.parse(localStorage.getItem('userData'));
        const password = await fetchPassword(this.form.email)
          if (password) {
            if (password === this.form.password) {
            localStorage.setItem('register', true);
            this.$accessor.modal.closeModal(Modal.Login)
          }
        }
      }
    }
  }
};
</script>
