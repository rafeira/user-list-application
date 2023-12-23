<script>
import UserService from '../services/UserService';
import CustomButton from '../components/CustomButton.vue';
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
  components: {
    CustomButton
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
    async onShowUserPressed(userId) {
      this.$router.push({name: 'show-user', params: {id: userId}})
    }
  },
};
</script>

<template>
  <main>
    <div id="user-table-container">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="user in users" :key="user.id" :id="`user-item-${user.id}`">
            <td>
              {{ user.fullName() }}
            </td>
            <td id="user-table-actions">
              <span class="action">
                <CustomButton title="Edit" @click="onEditUserPressed(user.id)" class="btn-sm"/>
              </span>
              <span class="action">
                <CustomButton title="Details" @click="onShowUserPressed(user.id)" class="btn-info btn-sm"/>
              </span>
              <span class="action">
                <CustomButton title="Remove" @click="onRemoveUserPressed(user.id)" class="btn-danger btn-sm"/>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style>
  #user-table-container #user-table-actions .action{
    margin: 5px;
  }
  main #user-table-container {
    margin: 100px 50px
  }
</style>
