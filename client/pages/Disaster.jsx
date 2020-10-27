import React from 'react';
import NewsContent from '../components/News/NewsContent';
import VideoContent from '../components/Video/VideoContent';

const Disaster = ({ disaster, location }) => (
  <div className="w-5/6 mt-32 mx-12 mb-12 grid gap-4 grid-cols-2 grid-rows-2">
    <NewsContent disaster={disaster} location={location} />
    <VideoContent disaster={disaster} location={location} />
  </div>
);

export default Disaster;
