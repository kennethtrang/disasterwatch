const newsController = require('../controllers/newsController');
const videoController = require('../controllers/videoController');

const resolvers = {
  Query: {
    news: async (_, { input }) => {
      try {
        const { disaster, city, state } = input;
        const newsResults = await newsController.getNews(disaster, city, state);
        newsResults.forEach((article) => {
          article.id = article.title;
          article.source = article.source.name;
        });
        return newsResults;
      } catch (error) {
        console.log('Error in news resolver: ', error);
        return error;
      }
    },
    videos: async (_, { input }) => {
      try {
        const { disaster, city, state } = input;
        const videoResults = await videoController.getVideos(disaster, city, state);
        const videoItems = videoResults.map((video) => ({
          id: video.id.videoId,
        }));
        return videoItems;
      } catch (error) {
        console.log('Error in videos resolver: ', error);
        return error;
      }
    },
  },
};

module.exports = resolvers;
