import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import s from '.././Styles/Styles.module.css';

const Button = ({ onFetchImg }) => (
    <button 
      type="button" 
      className="Button" 
      onClick={onFetchImg}>
      Load more 
    </button>
);

export default Button;

Button.propTypes = {
  fetchImg: PropTypes.func.isRequired,
};