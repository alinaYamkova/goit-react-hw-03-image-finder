import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import { v4 as uuidv4 } from 'uuid';

const ImageGallery = ({ hits, getElem }) => {
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem 
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          getElem={getElem}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  getElem: PropTypes.func.isRequired,
};
