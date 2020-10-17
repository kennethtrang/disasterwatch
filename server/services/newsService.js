const axios = require('axios');
const { stringify } = require('query-string');

const newsBaseURL = 'https://newsapi.org/v2/everything';

const newsService = {
  getNews: async (disaster, city, state) => {
    try {
      const searchString = `${disaster} ${city} ${state || ''}`;
      const queryString = stringify({
        q: searchString,
        page: 1,
        pageSize: 5,
      });

      const { data } = await axios.get(
        `${newsBaseURL}?${queryString}`,
        {
          headers: {
            'X-Api-Key': process.env.NEWS_API_KEY,
          },
        },
      );

      const results = {
        totalResults: data.totalResults,
        articles: data.articles,
      };

      return results;
    } catch (e) {
      console.log('Error in getNews: ', e);
    }
  },
};

module.exports = newsService;
