<script>
export default {
  props: {
    title: String
  }
}
</script>


<template>
  <button type="button" class="btn btn-primary" @click="$emit('click')">{{ title }}</button>
</template>

<style>

</style>
