import React, {Component} from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  state = {
    selectedImg: this.props.largeImageURL,
  };

  handleChange = () => {
    this.props.onClick(this.state.largeImageURL);
  };

  render() {
    const {webformatURL, tags, id} = this.props;

    return (
      <li onClick={this.handleChange}>
        <img
          src={webformatURL}
          alt={tags}
          key={id}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
