import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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

const NewsContent = ({ disaster }) => {
  const { data, loading, error } = useQuery(NEWS, {
    variables: {
      searchParams: {
        disaster: disaster.toUpperCase(),
        city: 'Seattle',
      },
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{`Error: ${error}`}</h1>;

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default NewsContent;
