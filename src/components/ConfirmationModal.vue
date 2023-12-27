<template>
  <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmationModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ contentMessage }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
          <button type="button" @click.prevent="this.onConfirmButtonPressed()" :class="`btn btn-primary ${confirmationButtonColor}`" data-bs-dismiss="modal">{{ confirmationButtonTitle }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Confirm?"
      },
      contentMessage: {
        type: String,
        default: "Are you sure do you wanna proceed?"
      },
      modalId: String,
      confirmationButtonTitle: {
        type: String,
        default: "Yes"
      },
      confirmationButtonColor: String
    },
    data() {
      return {

      }
    },
    methods: {
      onConfirmButtonPressed() {
        this.$emit('confirm-action');
      }
    }
  }
</script>
