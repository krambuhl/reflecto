<template>
  <div class="AppShell">
    <header class="AppShell__header">
      <ShellHeader />
    </header>

    <div class="AppShell__content" id="main">
      <router-view></router-view>
    </div>

    <footer class="AppShell__footer">
      <ShellFooter />
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style>
</style>
