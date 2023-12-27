<script>
import User from '../models/User'
import UserService from '../services/UserService';
import UserForm from '../components/UserForm.vue'
export default {

  data() {
    return {
      user: new User(),
      errors: {},
      userService: new UserService()
    };
  },
  async mounted() {
    await this.getUser();
  },

  components: {
    UserForm
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
  <main>
    <div id="form-container">
      <UserForm :user="user" @submit-form="submitForm"/>
    </div>
  </main>
</template>
<style>
  #form-container {
    margin: 100px 50px
  }
</style>
