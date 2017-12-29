<template>
  <div class="ModalDialog" :class="[variant]">
    <div class="action" @click="handleClose"></div>
    <div class="inner"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'ModalDialog',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
