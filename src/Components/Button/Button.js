import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import s from '.././Styles/Styles.module.css';

const Button = ({ fetchImg }) => (
    <button 
      type="button" 
      className="Button" 
      onClick={fetchImg}>
      Load more 
    </button>
);

export default Button;

Button.propTypes = {
  fetchImg: PropTypes.func.isRequired,
};