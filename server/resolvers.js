const newsService = require('./services/newsService');
const videoService = require('./services/videoService');

const resolvers = {
  Query: {
    news: async (_, { input }) => {
      const newsResults = await newsService.getNews(input.disaster, input.city, input.state);
      newsResults.forEach((article) => {
        article.id = article.title;
        article.source = article.source.name;
      });
      return newsResults;
    },
    videos: async (_, { input }) => {
      const videoResults = await videoService.getVideos(input.disaster, input.city, input.state);
      const videoItems = videoResults.map((video) => ({
        id: video.id.videoId,
        title: video.snippet.title,
      }));

      return videoItems;
    },
  },
};

module.exports = resolvers;
