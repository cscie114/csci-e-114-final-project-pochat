<template>
  <nav class="bg-gray-800 text-white fixed top-0 w-full z-50">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <a href="/" class="text-xl font-bold">Mario's Youtube</a>
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="hover:text-gray-400">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/mario" class="hover:text-gray-400">Mario</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Adjust styles as needed */
</style>
