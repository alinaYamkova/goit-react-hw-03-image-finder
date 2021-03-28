import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ fetchImg }) => (
  <button 
    type="button" 
    className={s.Button} 
    onClick={fetchImg}>
    Load more 
  </button>
  // console.log(fetchImg)
);

export default Button;

Button.propTypes = {
  fetchImg: PropTypes.func.isRequired,
};