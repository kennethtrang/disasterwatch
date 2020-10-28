const axios = require('axios');
const { stringify } = require('query-string');

const newsBaseURL = 'https://newsapi.org/v2/everything';

const newsController = {
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

      return data.articles;
    } catch (e) {
      console.log('Error in getNews: ', e);
    }
  },
};

module.exports = newsController;
