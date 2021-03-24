import React, {Component} from 'react';
// import s from '.././Styles/Styles.module.css';

const Button = ({ onLoadMore }) => (
  <button 
    type="button" 
    className="btn-b" 
    onClick={() => onLoadMore()}>
    Load more
  </button>
);

export default Button;