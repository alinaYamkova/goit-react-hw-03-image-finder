import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";


const ImageGallery = ({ hits, getElem }) => {
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem 
          key={id}
          alt={tags}
          src={webformatURL}
          selectedImg={largeImageURL}
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
