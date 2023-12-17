<script>
import UserService from '../services/UserService';

export default {
  data() {
    return {
      users: [],
      userService: new UserService()
    };
  },
  async mounted() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      await this.userService.getAll('users')
        .then(users => {
          console.log(users)
          this.users = users;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },


  },
};
</script>

<template>
  <main>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.fullName() }}
      </li>
    </ul>
  </main>
</template>
