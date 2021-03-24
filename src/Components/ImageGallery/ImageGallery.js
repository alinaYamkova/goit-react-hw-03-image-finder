import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ hits, getElem }) => {
  return (
    <ul className="ImageGallery">
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
