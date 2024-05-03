
<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';
import { channelsPlaylistIds } from '~/server/channelsPlaylistIds';

// Access the data from nuxt.config.ts, runtime
const config = useRuntimeConfig();
const YOUTUBE_API = config.public.youTubeApi;

// access data from ../server/channelsPlaylistIds.js
const channelIds = channelsPlaylistIds;

// Randomize uploadIds
const randomPlaylistChannelId = Object.keys(channelIds)[Math.floor(Math.random() * Object.keys(channelIds).length)];

// Return final random
const finalRandomChannelPlaylistId = channelIds[randomPlaylistChannelId];

// Initialize array to save results and freeze them. Otherwise, titles and images don't match.
// videos is a reactive component.
const videos = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${finalRandomChannelPlaylistId}&key=${YOUTUBE_API}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }
    const data = await response.json();
    videos.value = data.items;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>

<template>
  <div class="flex flex-col gap-2 justify-center m-auto items-center">
    <div v-for="(video, index) in videos" :key="index">
      <a :href="`/${finalRandomChannelPlaylistId}/${video.snippet.resourceId.videoId}`">
        <img :src="video.snippet.thumbnails.medium.url" alt="Video Thumbnail" class="rounded-lg border border-gray-300">
        <p class="text-base font-bold inline-block w-[325px] truncate">{{ video.snippet.title }}</p>
        <p class="text-base">{{ video.snippet.channelTitle }}</p>
        <p class="text-base">{{ video.snippet.publishedAt }}</p>
      </a>
    </div>
  </div>
</template>


<style scoped>
/* Add your scoped styles here */
</style>
