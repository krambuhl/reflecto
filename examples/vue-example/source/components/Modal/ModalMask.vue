<template>
  <div class="ModalMask" @click="handleClose"></div>
</template>

<script>
export default {
  name: 'ModalMask',
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
