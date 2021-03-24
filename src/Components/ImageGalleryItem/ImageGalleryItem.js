import React from "react";
import PropTypes from "prop-types";
// import "../Styles/Styles.module.css";

const ImageGalleryItem = ({ hits, getElem }) => {
  return (
    <>
      {hits.map(elem => (
        <li className="ImageGalleryItem" >
          <img
            src={elem.webformatURL}
            alt={elem.tags}
            getElem={()=>getElem(elem)}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  hits: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getElem: PropTypes.func.isRequired,
};