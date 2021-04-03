import { Component } from "react";
import api from "./services/API";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
// const fetch = api.getFetch().then((fetch) => console.log(fetch))

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    resultLength: null,
    largeImageURL: '',
    error: null,
    msg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery && this.state.searchQuery !== '') {
      this.fetchImg();
    }
  };

  fetchImg = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true});

    api.getFetch(searchQuery, currentPage)
    .then((result) => { 
      if(result.length) {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...result],
          resultLength: result.length, 
          currentPage: prevState.currentPage + 1 }))
        this.scrollWindow();
      } else {
        this.setState({msg: 'Please write a correct search'});
        alert(this.state.msg);
      }
    })
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ isLoading: false }));
  };

  scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'})
  };
  
  changeQuery = (searchQuery) => {
    if (this.state.searchQuery === searchQuery) {
      return;
    } 
    this.setState({ hits: [], searchQuery: searchQuery, currentPage: 1,
      isLoading: true, resultLength: 12 });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getElem = (url) => {
    this.setState({ largeImageURL: url });
    this.toggleModal();
  };

  render() {
    const { showModal, isLoading, hits, resultLength, largeImageURL } = this.state;
    const { toggleModal, getElem, changeQuery, fetchImg } = this;
    const shouldRenderLoadMoreBtn = resultLength === 12 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={changeQuery} />
        <ImageGallery hits={hits} getElem={getElem} />

        {shouldRenderLoadMoreBtn &&  <Button onFetchImg={fetchImg} />} 
        
        {showModal && (
          <Modal onClose={toggleModal}>
            <img 
              src={largeImageURL} 
              width="600" 
              height="400" 
            />
          </Modal>
        )}

        {isLoading && 
          <Loader 
            type="BallTriangle" 
            color="#00BFFF" 
            height={80}
            width={80} 
            timeout={2500} 
          />}
      </>
    );
  };
}

export default App;
