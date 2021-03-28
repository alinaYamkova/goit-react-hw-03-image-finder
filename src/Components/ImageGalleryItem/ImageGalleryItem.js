import React, {Component} from "react";
import PropTypes from "prop-types";
import s from '../Searchbar/Searchbar.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
  };
  
  state = {
    selectedImg: this.props.largeImageURL,
  };

  handleChange = () => {
    this.props.onClick(this.state.largeImageURL);
  };

  render() {
    const {webformatURL, tags, id} = this.props;

    return (
      <li className={s.ImageGalleryItem} onClick={this.handleChange}>
        <img
          src={webformatURL}
          alt={tags}
          key={id}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  }
}


export default ImageGalleryItem;
