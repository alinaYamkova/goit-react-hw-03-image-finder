import React from "react";

const baseUrl = "https://pixabay.com/api/";
const apiKey = "20840162-f62ff7402b91de28f502cc31c";

function getFetch(searchQuery, currentPage) {
  const url = `${baseUrl}?q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12&key=${apiKey}`;
  return fetch(url)
  .then((res) => res.json())
  .then((response) => response.hits);
  
}

////////////////////////////////////////////////
// import axios from "axios";
// axios.defaults.baseURL = "https://pixabay.com/api/";
// let key = "20791444-9e10ec7121cc0b87619d148c0";
// // const URL = `${this.baseUrl}?q=${query}&page=${this.page}&image_type=photo&orientation=horizontal&per_page=${this.per_page}`;
// const getFetch = ({ query = "", currentPage = 1 }) => {
//   return axios
//     .get(
//       `?q=${query}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12${key}`
//     )
//     .then((response) => response.hits);
// };


export default { getFetch };