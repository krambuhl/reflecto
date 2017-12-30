<template>
  <div>
    <div v-if="isMarkdown">
      <!-- render markdown and plugin components -->
      <Readme v-html="readme" />
    </div>

    <div v-else-if="isComponent">
      IS COMPONENT
    </div>

    <div v-else>
      NOT FOUND
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
