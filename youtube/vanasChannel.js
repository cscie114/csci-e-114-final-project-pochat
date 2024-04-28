import { useAsyncData } from 'nuxt/app';

export default function vanasChannel() {
  const config = useRuntimeConfig();
  const YOUTUBE_API = config.public.youTubeApi;

  const fetchData = async () => {
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUrcg40cuUt7QZFUd-cOywPw&key=${YOUTUBE_API}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from api');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return useAsyncData('youtubeData', fetchData);
}
