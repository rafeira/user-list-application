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


  },
};
</script>

<template>
  <main>
    <p>
      {{ user.fullName() }}
    </p>
  </main>
</template>
