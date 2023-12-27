<template>
  <form @submit.prevent="this.submit">
    <div class="mb-3">
      <label for="firstName" class="form-label">{{ $t('models.user.attributes.first_name') }}:</label>
      <input type="text" id="firstName" class="form-control" v-bind:class="{ 'is-invalid': Object.keys(this.errors).length > 0 }" v-model="user.first_name">
      <div class="invalid-feedback">
        <div class="input-error" v-if="errors.first_name_presence">{{ errors.first_name_presence }}</div>
        <div class="input-error" v-if="errors.first_name_length">{{ errors.first_name_length }}</div>
      </div>
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">{{ $t('models.user.attributes.last_name') }}:</label>
      <input type="text" id="lastName" v-model="user.last_name" class="form-control" >
    </div>

    <button type="submit" class="btn btn-success">{{$t('submit')}}</button>
  </form>
</template>


<script>
  import User from '../models/User';
  export default {
    data() {
      return {
        errors: {}
      }
    },
    props: {
      user: User
    },
    methods: {
      isFormValid() {
        this.errors = {}
        let isValid = true;
        if (!this.user.first_name) {
          this.errors.first_name_presence = "Precisa preencher pelo menos o primeiro nome";
          isValid = false;
        }
        if (this.user.first_name.length < 2) {
          this.errors.first_name_length = "Primeiro nome precisa ter mais de 1 caractere";
          isValid = false;
        }
        return isValid;
      },
      submit() {
        if (this.isFormValid()){
          this.$emit('submit-form')
        }
      }
    }
  }
</script>


<style scoped>
  form .input-error {
    font-size: .6rem;
  }
</style>
