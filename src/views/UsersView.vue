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
          this.users = users;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    async onRemoveUserPressed(userId) {
      await this.userService.remove(userId)
        .then((_) => this.removeTableRow(userId))
        .catch((error) => {
          console.error(error)
        });
    },
    removeTableRow(userId) {
      const element = document.querySelector(`#user-item-${userId}`);
      element.remove();
    },
    async onEditUserPressed(userId) {
      this.$router.push(`users/${userId}/edit`)
    },

  },
};
</script>

<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" :id="`user-item-${user.id}`">
          <td>
            <router-link :to="{ name: 'show-user', params: { id: user.id } }">
              {{ user.fullName() }}
            </router-link>
          </td>
          <td>
            <span>
              <button @click="onRemoveUserPressed(user.id)">Remove</button>
            </span>
            <span>
              <button @click="onEditUserPressed(user.id)">Edit</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
