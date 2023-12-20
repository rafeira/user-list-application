<script>
import User from '../models/User'
import UserService from '../services/UserService';
import FormError from '../components/forms/FormError.vue';

export default {

  data() {
    return {
      user: new User(),
      errors: {},
      userService: new UserService()
    };
  },
  async mounted() {
    await this.getUser();
  },

  components: {
    FormError
  },

  methods: {
    async getUser() {
      await this.userService.find(this.$route.params.id)
        .then(user => {
          this.user = user;
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    },
    async submitForm() {
      if (this.isFormValid()){
        await this.userService.update(this.user)
        .then((_) => this.$router.push({name: 'show-user', params: {id: this.user.id}}))
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
  <div class="about">
    <form @submit.prevent="submitForm">
      <FormError :error="errors.first_name_presence"/>
      <FormError :error="errors.first_name_length"/>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="user.first_name">

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="user.last_name">

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<style>

</style>
