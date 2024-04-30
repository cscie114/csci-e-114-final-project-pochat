<script setup>
import AnimationYT from '../components/youtube-channels/AnimationYT.vue'
import PixarYT from '../components/youtube-channels/PixarYT.vue'

const allGood = 5

</script>

<template>
  <div>
    <h1 class="mt-20">
        This is the index page
    </h1>
    <p>All good is: {{ allGood }}</p>
    <div class="text-2xl">
      <HelloWorld />
      <AnimationYT />
      <PixarYT />
    </div>

  </div>
</template>

<style>

</style>