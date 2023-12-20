<script>
export default {
  props: {
    error: String
  }
}
</script>


<template>
  <div v-if="error" class="user-form-error">
    {{ error }}
  </div>
</template>

<style>
  form .user-form-error{
    color: red;
    font-size: 14px;
  }
</style>
