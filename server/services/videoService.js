const axios = require('axios');
const { stringify } = require('query-string');

const videoBaseURL = 'https://www.googleapis.com/youtube/v3/search';

const videoService = {
  getVideos: async (disaster, city, state) => {
    try {
      const searchString = `${disaster} ${city} ${state || ''}`;
      const queryString = stringify({
        part: 'snippet',
        q: searchString,
        type: 'video',
        key: process.env.YOUTUBE_API_KEY,
      });

      const { data } = await axios.get(`${videoBaseURL}?${queryString}`);
      return data.items;
    } catch (e) {
      console.log('Error in getVideos: ', e);
    }
  },
};

module.exports = videoService;
