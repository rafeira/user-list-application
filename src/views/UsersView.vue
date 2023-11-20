<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      await axios.get('http://localhost:8080/api/v1/users')
        .then(response => {
          this.users = response.data;
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
        {{ user.firstName }} {{ user.lastName }}
      </li>
    </ul>
  </main>
</template>
