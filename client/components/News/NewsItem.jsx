import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ article }) => {
  const {
    title, description, source, publishedAt, urlToImage, url,
  } = article;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="m-4 rounded border border-gray-300 p-2">
        <h4 className="font-bold text-lg">{title}</h4>
        <h5>{source}</h5>
        <img src={urlToImage} className="col-span-1 my-2" alt="article" />
        <section className="my-2">
          {description}
        </section>
        <section>
          {publishedAt}
        </section>
      </div>
    </a>
  );
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.string,
    publishedAt: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsItem;
