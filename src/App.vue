<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>ola mundo</div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Users</RouterLink>
        <RouterLink to="/create-user">Create user</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
