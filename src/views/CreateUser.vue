<script>
import User from '../models/User'
import UserService from '../services/UserService';
export default {
  data() {
    return {
      user: new User(),
      errors: {},
      userService: new UserService()
    };
  },
  methods: {
    async submitForm() {
      if (this.isFormValid()) {
        await this.userService.save(this.user)
          .then((response) => this.$router.push(`${response.data.id}`))
          .catch((error) => console.error(error));
      }
    },
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
    }
  }
};
</script>

<template>
  <main>
    <div id="form-container">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name:</label>
          <input type="text" id="firstName" class="form-control" v-bind:class="{ 'is-invalid': Object.keys(this.errors).length > 0 }" v-model="user.first_name">
          <div class="invalid-feedback">
            <div class="input-error" v-if="errors.first_name_presence">{{ errors.first_name_presence }}</div>
            <div class="input-error" v-if="errors.first_name_length">{{ errors.first_name_length }}</div>
          </div>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name:</label>
          <input type="text" id="lastName" v-model="user.last_name" class="form-control" >
        </div>

        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  </main>
</template>
<style scoped>
  #form-container {
    margin: 100px 50px
  }
  #form-container form .input-error {
    font-size: .6rem;
  }
</style>
