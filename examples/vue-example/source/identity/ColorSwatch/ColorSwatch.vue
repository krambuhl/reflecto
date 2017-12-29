<template>
  <button class="root" :class="[variant]"><slot /></button>
</template>

<script>
export default {
  name: 'ColorSwatch',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="css" scoped>
  .root {}
</style>
