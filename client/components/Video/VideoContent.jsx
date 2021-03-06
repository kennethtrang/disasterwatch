import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import VideoItem from './VideoItem';
import { DISASTER_LIST } from '../../data/disasters';

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

VideoContent.propTypes = {
  disaster: PropTypes.oneOf(DISASTER_LIST).isRequired,
  location: PropTypes.string.isRequired,
};

export default VideoContent;
