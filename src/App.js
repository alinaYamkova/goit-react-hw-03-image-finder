import { Component } from "react";
import api from "./API/API";
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
    searchQuery: "",
    currentPage: 1,
    isLoading: false,
    showModal: false,
    resultLength: null,
    selectedImg: '',
    error: null,
  };

  componentDidUpdate(prevState, prevProps) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery && searchQuery !== '') {
      this.fetchImg();
    };
  }
  
  onChangeQuery = (query) => {
    const { searchQuery, currentPage } = this.state;
    if(searchQuery === query) {
      return;
    }
    this.setState ({searchQuery: query, currentPage: 1, hits: [] });
    this.setState({ isLoading: true });
    api.getFetch(query, currentPage).then((result) => {
      this.setState({ 
        hits: [...result], 
        resultLength: result.length, 
        isLoading: false,
      })
      .catch((error) => { console.log("ERROR", error)});
    });  
  }

  fetchImg = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true});

    api.getFetch({searchQuery, currentPage})
    .then(({result}) => {
      this.setState((prevState) => ({
        hits: [...prevState.hits, result],
        resultLength: result.length, 
        currentPage: prevState.currentPage + 1,
      }));
      this.scrollTo();
    })
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ isLoading: false }));
    // console.log(this.state.hits);
    // console.log(this.state.result)
  };
  
  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getElem = (elem) => {
    this.setState({ selectedImg: elem });
    this.toggleModal();
  };

  render() {
    const { showModal, isLoading, hits, resultLength, selectedImg } = this.state;
    const { toggleModal, getElem, fetchImg, onChangeQuery } = this;
    const shouldRenderLoadMoreBtn = resultLength === 12 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={onChangeQuery} />
        <ImageGallery hits={hits} getElem={getElem} />

        {shouldRenderLoadMoreBtn && 
          <Button onFetchImg={fetchImg} />
        } 
        
        {showModal && (
          <Modal onClose={toggleModal}>
            <img 
              src={selectedImg} 
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
