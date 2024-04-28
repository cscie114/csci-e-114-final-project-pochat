<script setup>
import {useFetch, useRuntimeConfig} from "nuxt/app";

const YOUTUBE_API = useRuntimeConfig().public.YOUTUBE_API;

  const fetchData = async () => {

    try {
      console.log('YOUTUBE_API', YOUTUBE_API);
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUQeRaTukNYft1_6AZPACnog&key=${YOUTUBE_API}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error(error);
      return null; 
    }
  };

  const youTubeData = await fetchData();

  console.log('youTubeData', youTubeData);

</script>

<template>
  <div>
    <h1>Animation Channel</h1>

    {{  youTubeData.items[1].snippet.title }}

    <!-- <p>{{ config.public.youTubeApi }}</p> -->
    <!-- <p>{{ youTubeData.items[1].snippet.title }}</p> -->
  </div>
<!-- 
  <div v-for="(video, index) in youTubeData" :key="index">
    {{ youTubeData.items[index].snippet.title }}
  </div> -->

</template>

<style lang="scss" scoped>

</style>