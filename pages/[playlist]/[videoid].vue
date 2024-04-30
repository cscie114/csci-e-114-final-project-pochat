<script setup>
import { useRuntimeConfig } from "nuxt/app";

// Access route params like videoId and playlistId
const route = useRoute()

// Embed video from YouTube
const videoUrl = `https://www.youtube.com/embed/${route.params.videoid}`;

// Access values from nuxt.config.ts
const config = useRuntimeConfig();

// YouTube API key
const YOUTUBE_API = config.public.youTubeApi;

// Fetch YouTube data
const fetchData = async () => {
  try {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${route.params.playlist}&videoId=${route.params.videoid}&key=${YOUTUBE_API}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const youTubeData = await fetchData();
</script>

<template>
  <div class="mt-10 justify-center bg-orange-100">
    <div class="flex">
      <div class="w-full bg-blue-500 relative">
        <div class="video-container">
          <iframe
            class="absolute inset-0 w-full h-full"
            :src="videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            title="YouTube video player"
          >
          </iframe>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
        </div>
        {{ youTubeData.items[0].snippet.title }}
<p>The playlist ID: {{ route.params.playlist }}</p>
<p>The Video Id: {{ route.params.videoid }}</p>
      </div>
      <div class="w-1/3 bg-slate-600">
        <p>Received Playlist IDs: {{ vanasPlayList }}</p>
        <p>Debug Information:</p>
        <pre>{{ $route.params }}</pre>
      </div>
    </div>
  </div>
</template>

<style>
.video-container {
  padding-top: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
}
</style>


<style scoped>

</style>