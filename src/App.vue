<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg border-bottom">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Users</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/users/new">Create user</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  header nav {
    background-color: rgb(202, 202, 202);
  }
</style>
