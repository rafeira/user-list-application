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
  methods: {
    async submitForm() {
      await this.userService.save(this.user)
      .then((response) => console.log(response))
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
