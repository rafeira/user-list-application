<script>
import UserService from '../services/UserService';
import CustomButton from '../components/CustomButton.vue';
import ConfirmationModal from '../components/ConfirmationModal.vue'
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
    CustomButton,
    ConfirmationModal
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
      await this.$router.push(`users/${userId}/edit`)
    },
    async onShowUserPressed(userId) {
      await this.$router.push({name: 'show-user', params: {id: userId}})
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
                <CustomButton title="Edit" @click-action="this.onEditUserPressed(user.id)" class="btn-sm"/>
              </span>
              <span class="action">
                <CustomButton title="Details" @click-action="this.onShowUserPressed(user.id)" class="btn-info btn-sm"/>
              </span>
              <span class="action">
                <CustomButton title="Remove" class="btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#removeConfirmationModal"/>
                <ConfirmationModal @confirm-action="this.onRemoveUserPressed(user.id)" modal-id="removeConfirmationModal" confirmation-button-color="btn-danger"/>
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
