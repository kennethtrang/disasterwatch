import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import VideoItem from './VideoItem';

const VIDEOS = gql`
  query Videos($searchParams: SearchInput!) {
    videos(input: $searchParams) {
      id
    }
  }
`;

const VideoContent = ({ disaster, location }) => {
  const { data, loading, error } = useQuery(VIDEOS, {
    variables: {
      searchParams: {
        disaster: disaster.toUpperCase(),
        city: location,
      },
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{`Error: ${error}`}</h1>;

  const videosToDisplay = data.videos.map((video) => <VideoItem key={video.id} videoId={video.id} />);

  return (
    <div className="bg-white border rounded border-gray-400">
      <div className="overflow-scroll overflow-x-hidden max-h-full">
        {videosToDisplay}
      </div>
    </div>
  );
};

export default VideoContent;
