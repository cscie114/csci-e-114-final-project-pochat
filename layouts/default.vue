<script setup>
import NavBar from "~/components/NavBar.vue";
</script>
<template>
  <div>
    <header>
      <NavBar />
    </header>
    <div>
      <!-- Content starts -->
      <slot />
      <!-- Content ends -->
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>