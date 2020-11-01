import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ videoId }) => (
  <div className="video-item-wrapper m-4">
    <iframe
      className="video-item"
      title={videoId}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

VideoItem.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoItem;
