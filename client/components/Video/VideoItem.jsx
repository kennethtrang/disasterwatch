import React from 'react';

const VideoItem = ({ videoId }) => {
  const t = 't';

  return (
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
};

export default VideoItem;
