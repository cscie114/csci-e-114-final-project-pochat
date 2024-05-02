<script setup>
import AnimationYT from '../components/youtube-channels/AnimationYT.vue'
import PixarYT from '../components/youtube-channels/PixarYT.vue'
import Xbox from '../components/youtube-channels/XboxYT.vue'
import RandomYT from '~/components/youtube-channels/RandomYT.vue';

const allGood = 5

</script>

<template>
  <div>
    <h1 class="mt-20">
        This is the index page
    </h1>
    <p>All good is: {{ allGood }}</p>
    <div class="flex justify-center">
      <div>
        <!-- <HelloWorld /> -->
        <!-- <AnimationYT /> -->
        <!-- <PixarYT /> -->
        <!-- <Xbox /> -->
        <RandomYT />
        <RandomYT />
      </div>
    </div> 
  </div>
</template>

<style>

</style>