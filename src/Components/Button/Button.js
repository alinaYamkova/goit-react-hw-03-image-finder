import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css';

const Button = ({ onFetchImg }) => (
  <button 
    type="button" 
    className={s.Button} 
    onClick={onFetchImg}
  >
    Load more 
  </button>
);

export default Button;

Button.propTypes = {
  onFetchImg: PropTypes.func,
};