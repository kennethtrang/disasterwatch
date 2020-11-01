import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NewsItem from './NewsItem';
import { disasterList } from '../../data/disasterTypes';

const NEWS = gql`
  query News($searchParams: SearchInput!) {
    news(input: $searchParams) {
      id
      title
      description
      source
      publishedAt
      urlToImage
      url
    }
  }
`;

const NewsContent = ({ disaster, location }) => {
  const { data, loading, error } = useQuery(NEWS, {
    variables: {
      searchParams: {
        disaster: disaster.toUpperCase(),
        city: location,
      },
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{`Error: ${error}`}</h1>;

  const newsToDisplay = data.news.map((article) => <NewsItem key={article.id} article={article} />);

  return (
    <div className="bg-white border rounded border-gray-400 row-span-2">
      <div className="overflow-scroll overflow-x-hidden max-h-full">
        {newsToDisplay}
      </div>
    </div>
  );
};

NewsContent.propTypes = {
  disaster: PropTypes.oneOf(disasterList).isRequired,
  location: PropTypes.string.isRequired,
};

export default NewsContent;
