<script>
import ConfirmationModal from '../components/ConfirmationModal.vue';
import CustomButton from '../components/CustomButton.vue';
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
        .then((_) => this.$router.push({ name: "users" }))
        .catch((error) => {
        console.error(error);
      });
    },
    async onEditUserPressed() {
      this.$router.push({ path: `users/${this.user.id}/edit`, name: 'edit-user' });
    },
  },
  components: { CustomButton, ConfirmationModal }
};
</script>

<template>
  <main>
    <div id="user-container">
      <div class="d-grid gap-2 col-6 mx-auto">
        <p>
          {{ user.fullName() }}
        </p>
        <CustomButton @click="this.onEditUserPressed()" title="Edit"/>
        <CustomButton title="Remove" class="btn-danger" data-bs-toggle="modal" data-bs-target="#removeConfirmationModal"/>
        <ConfirmationModal @confirm-action="this.removeUser()" modal-id="removeConfirmationModal" confirmation-button-color="btn-danger"/>
      </div>
    </div>
  </main>
</template>
<style>
  #user-container {
    margin: 100px 50px;
  }
</style>
