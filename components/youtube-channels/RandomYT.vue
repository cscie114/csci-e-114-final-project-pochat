<script setup>
import { useRuntimeConfig } from "nuxt/app";
import { channelsPlaylistIds } from '~/server/channelsPlaylistIds'

//These ids are publicly available. No need to store them in the .env file
// const channelId = 'UCrcg40cuUt7QZFUd-cOywPw'
// const randomChannelPlaylistId = 'UUrcg40cuUt7QZFUd-cOywPw';

// Get access to process.env inside the nuxt.config.ts
const config = useRuntimeConfig();

//YOUTUBE_API is stored in github actions
const YOUTUBE_API = config.public.youTubeApi; 

// Get the channel ids from /server/channelPlalistIds.js
const channelIds = channelsPlaylistIds;

// Randomize the id key
const randomPlaylistChannelId = Object.keys(channelIds)[Math.floor(Math.random() * Object.keys(channelIds).length)];

// Final random playlist ID using the random key
const finalRandomChannelPlaylistId = channelIds[randomPlaylistChannelId];

console.log("channelIds", channelIds);
console.log("randomPlaylistChannelId", randomPlaylistChannelId); 
console.log("finalRandomChannelPlaylistId", finalRandomChannelPlaylistId);

const fetchData = async () => {
  try {
    console.log("log inside try: YOUTUBE_API", YOUTUBE_API);
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${finalRandomChannelPlaylistId}&key=${YOUTUBE_API}`);
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
console.log('youTubeData:', youTubeData);


</script>

<template>
  <div class="flex flex-wrap gap-2">
    <div v-for="(video, index) in youTubeData.items" :key="index">
      <img src="">
      <!-- <p>{{ youTubeData.items[index].snippet.title }}</p> -->
      <a :href="`/${finalRandomChannelPlaylistId}/${video.snippet.resourceId.videoId}`">
        <img :src="video.snippet.thumbnails.medium.url" alt="Video Thumbnail">
        <p class="text-base font-bold inline-block w-[350px]">{{ video.snippet.title }}</p>
        <p class="text-sm text-gray-500">Video id: {{ video.snippet.resourceId.videoId }}</p>
        <p class="text-base font-bold inline-block w-[350px]">{{ video.snippet.publishedAt }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>