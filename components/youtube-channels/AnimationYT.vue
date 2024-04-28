<script setup>
import { useRuntimeConfig } from "nuxt/app";

const config = useRuntimeConfig();

//YOUTUBE_API is stored in github actions
const YOUTUBE_API = config.public.youTubeApi; 

const fetchData = async () => {
  try {
    console.log("log inside try: YOUTUBE_API", YOUTUBE_API);
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUrcg40cuUt7QZFUd-cOywPw&key=${YOUTUBE_API}`);
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
    <h1>VANAS Channel</h1>
    <!-- <p>{{ config.public.youTubeApi }}</p> -->
    <!-- <p>{{ youTubeData.items[1].snippet.title }}</p> -->
  </div>

  <div class="flex flex-wrap gap-2">
    <div v-for="(video, index) in youTubeData.items" :key="index">
      <img src="">
      <!-- <p>{{ youTubeData.items[index].snippet.title }}</p> -->
      <a :href="video.snippet.resourceId.videoId">
        <img :src="video.snippet.thumbnails.medium.url" alt="Video Thumbnail">
        <p class="text-base font-bold inline-block w-[350px]">{{ video.snippet.title }}</p>
        <p class="text-sm text-gray-500">Video id: {{ video.snippet.resourceId.videoId }}</p>
      </a>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>