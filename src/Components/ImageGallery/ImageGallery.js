import React, { Component } from "react";
// import "../Styles/Styles.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ hits, getElem }) => {
  return (
    <ul className="ImageGallery">
      {hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem 
          key={id}
          src={webformatURL}
          alt={tags}
          getElem={getElem}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
