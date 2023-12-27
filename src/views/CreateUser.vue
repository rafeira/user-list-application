<script>
import User from '../models/User'
import UserService from '../services/UserService';
import UserForm from '../components/UserForm.vue';
export default {
  data() {
    return {
      user: new User(),
      errors: {},
      userService: new UserService()
    };
  },
  components:{
    UserForm,
  },
  methods: {
    async submitForm() {
      await this.userService.save(this.user)
        .then((response) => this.$router.push(`${response.data.id}`))
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
<style scoped>
  #form-container {
    margin: 100px 50px
  }
</style>
