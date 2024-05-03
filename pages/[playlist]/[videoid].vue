<script setup>
import { useRuntimeConfig } from "nuxt/app";
import RandomYT from "~/components/youtube-channels/RandomYT.vue";

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
  <div class="mt-10 justify-center">
    <div class="flex">
      <div class="w-full">
        <div class="video-container">
          <iframe
            class="absolute inset-0 w-full h-full"
            :src="`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay
          >
          </iframe>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
        </div>
        <h2 class="text-2xl">{{ youTubeData.items[0].snippet.title }}</h2>
        <!-- <p>The playlist ID: {{ route.params.playlist }}</p> -->
        <!-- <p>The Video Id: {{ route.params.videoid }}</p> -->
        <div class="overflow-x-auto">
          <!-- <RandomYT /> -->
        </div>
      </div>
    
      <div class="hidden lg:flex justify-center items-center w-1/3">
          <div class="flex flex-wrap video-right-column">
            <RandomYT />
          </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.video-container {
  padding-top: 50.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Set a high z-index value */
}

.video-right-column {
  z-index: 2;
}

</style>
