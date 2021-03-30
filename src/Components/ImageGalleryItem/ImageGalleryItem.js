import React, {Component} from "react";
import PropTypes from "prop-types";
import s from '../Searchbar/Searchbar.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, getElem}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={()=>(getElem(largeImageURL))} 
        />
    </li>
  );
}


export default ImageGalleryItem;