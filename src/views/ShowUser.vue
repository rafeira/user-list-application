<script>
import User from '../models/User';
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
    async removeUser() {
      await this.userService.remove(this.user.id)
        .then((_) => this.$router.push({name: "users"}))
        .catch((error) => {
          console.error(error)
        });
    },
    async onEditUserPressed(userId) {
      this.$router.push({path: `users/${this.user.id}/edit`, name: 'edit-user'})
    },

  },
};
</script>

<template>
  <main>
    <p>
      {{ user.fullName() }}
    </p>
    <button @click="this.removeUser()">Remove</button>
    <button @click="this.onEditUserPressed()">Edit</button>

  </main>
</template>
