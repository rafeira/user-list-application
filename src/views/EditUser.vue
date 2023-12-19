<script>
import User from '../models/User'
import UserService from '../services/UserService';

export default {

  data() {
    return {
      user: new User(),
      userService: new UserService()
    };
  },
  async mounted() {
    await this.getUser();
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
      await this.userService.update(this.user)
      .then((_) => this.$router.push({name: 'show-user', params: {id: this.user.id}}))
      .catch((error) => console.error(error));
    }
  }
};
</script>

<template>
  <div class="about">
    <form @submit.prevent="submitForm">
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
