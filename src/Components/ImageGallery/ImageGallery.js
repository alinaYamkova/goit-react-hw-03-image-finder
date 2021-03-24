import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ hits, getElem }) => {
  return (
    <ul className="ImageGallery">
      {hits.map( hit => (
        <ImageGalleryItem 
          key={hit.id}
          alt={hit.tags}
          hit={hit}
          getElem={getElem}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
