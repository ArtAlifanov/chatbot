<template>
  <v-btn
      x-large
      color="primary"
      :disabled="disabled"
      class="send-button"
      @click="onClick"
    >
      {{ text }}
    </v-btn>
</template>

<script>
export default {
  name: 'SendButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'send'
    }
  },
  methods: {
    onClick() {
      this.$emit('on-click')
    }
  }
}
</script>

<style>
  .send-button {
    background-color: #56c8d8;
  }
</style>