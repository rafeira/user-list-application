<script>
export default {
  props: {
    title: String
  },
  methods: {
    onButtonClicked() {
      this.$emit('click-action');
    }
  }
}
</script>


<template>
  <button type="button" class="btn btn-primary" @click="this.onButtonClicked()">{{ title }}</button>
</template>

<style>

</style>
