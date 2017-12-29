<template>
  <div class="Modal" :class="{ 'is-expanded': this.isExpanded }">
    <ModalDialog @close="onClose">
      <slot></slot>
    </ModalDialog>

    <ModalMask @close="onClose" />
  </div>
</template>

<script>
import { default as ModalMask } from './ModalMask'
import { default as ModalDialog } from './ModalDialog'

export default {
  name: 'Modal',
  components: {
    ModalMask,
    ModalDialog
  },
  props: {
    isExpanded: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      required: true
    }
  }
}

export {
  ModalMask,
  ModalDialog
}
</script>

<style lang="css" scoped>
</style>
