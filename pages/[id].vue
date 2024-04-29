<script setup>
import { useRuntimeConfig } from "nuxt/app";

const { id } = useRoute().params

// Embed video from youtube
const videoUrl = `https://www.youtube.com/embed/${id}`;

// Access values in nuxt.config.ts
const config = useRuntimeConfig();

//YOUTUBE_API is stored in github actions
const YOUTUBE_API = config.public.youTubeApi; 

const fetchData = async () => {
  try {
    console.log("log inside try: YOUTUBE_API", YOUTUBE_API);
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUrcg40cuUt7QZFUd-cOywPw&videoId=${id}&key=${YOUTUBE_API}`);
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
console.log('youTubeData from [id]', youTubeData);
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

      </div>
      <div class="w-1/3 bg-slate-600">
        Right div
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