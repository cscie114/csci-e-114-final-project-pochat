<script setup>
import RandomYT from '~/components/youtube-channels/RandomYT.vue';

const allGood = 5

</script>

<template>
  <div class="mt-20">
      <div class="flex flex-wrap justify-center">
        <RandomYT v-for="index in 5" :key="index"/>
      </div>
  </div>
</template>

<style scoped>

</style>