<script setup>
import vanasChannel from '../youtube/vanasChannel'

const { data: youTubeData, error } = vanasChannel();

const { id } = useRoute().params

</script>

<template>
  <div>
    <h1 class="flex items-center justify-center mt-20">
      {{ id }}
    </h1>
    <p>{{ youTubeData }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>