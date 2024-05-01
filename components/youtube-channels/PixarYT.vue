<script setup>
import { useRuntimeConfig } from "nuxt/app";

//These ids are publicly available. No need to store them in the .env file
const channelId = 'UC_IRYSp4auq7hKLvziWVH6w'
const channelPlaylistId = 'UU_IRYSp4auq7hKLvziWVH6w';

const config = useRuntimeConfig();

//YOUTUBE_API is stored in github actions
const YOUTUBE_API = config.public.youTubeApi; 

const fetchData = async () => {
  try {
    console.log("log inside try: YOUTUBE_API", YOUTUBE_API);
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${channelPlaylistId}&key=${YOUTUBE_API}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from api');
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
    <h1>Pixar Channel</h1>
    <!-- <p>{{ config.public.youTubeApi }}</p> -->
    <!-- <p>{{ youTubeData.items[1].snippet.title }}</p> -->
  </div>

  <div class="flex gap-2 overflow-x-auto">
    <div v-for="(video, index) in youTubeData.items" :key="index">
      <img src="">
      <!-- <p>{{ youTubeData.items[index].snippet.title }}</p> -->
      <a :href="`/${channelPlaylistId}/${video.snippet.resourceId.videoId}`">
        <img :src="video.snippet.thumbnails.medium.url" alt="Video Thumbnail">
        <p class="text-base font-bold inline-block w-[350px]">{{ video.snippet.title }}</p>
        <p class="text-sm text-gray-500">Video id: {{ video.snippet.resourceId.videoId }}</p>
        <p class="text-base font-bold inline-block w-[350px]">{{ video.snippet.publishedAt }}</p>

      </a>
<!-- 
      <NuxtLink :to="{ name: 'id', params: { id: video.snippet.resourceId.videoId, playlistId: playlistId } }">Click to see playlistId</NuxtLink> -->

    </div>

  </div>

</template>

<style lang="scss" scoped>

</style>