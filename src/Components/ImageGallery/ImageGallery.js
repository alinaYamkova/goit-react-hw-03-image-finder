import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from '../Searchbar/Searchbar.module.css';


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
