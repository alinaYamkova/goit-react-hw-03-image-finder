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
    elem: '',
    error: null,
  };

  componentDidUpdate(prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg(this.state.searchQuery);
    };
  }
  
  onChangeQuery = (query) => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });

    api.getFetch(query, currentPage).then((result) => {
      this.setState({ 
        hits: result, 
        resultLength: result.length, 
        isLoading: false });
      })
      .catch((error) => {
        console.log("ERROR", error)
      })

    if(this.state.searchQuery === query) {
      return;
    } this.setState ({searchQuery: query, currentPage: 1, hits: [] });
  };  

  fetchImg = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });

    api.getFetch(currentPage, searchQuery).then((result) => {
      // console.log(result.length);
      this.setState((prevState) => ({
        hits: [...prevState.hits, ...result],
        currentPage: prevState.currentPage + 1,
      }));
      this.scrollTo();
    })
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ isLoading: false }));
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
    if (elem) {
      this.toggleModal();
      this.setState({ elem });
    }
  };

  render() {
    const { showModal, isLoading, hits, elem, resultLength } = this.state;
    const { toggleModal, getElem, fetchImg, onChangeQuery } = this;
    // const shouldRenderLoadMoreBtn = resultLength >= 12 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={onChangeQuery} />
        <ImageGallery hits={hits} getElem={getElem} />
        {showModal && (
          <Modal source={hits.webformatURL} onClose={toggleModal}>
            <img src={elem.largeImageURL} alt={elem.tags} width="800" height="600" />
          </Modal>
        )}
        {resultLength === 12 && !isLoading && <Button onFetchImg={fetchImg} />} 
        <Loader 
          type="BallTriangle" 
          color="#00BFFF" 
          height={80} 
          width={80} 
          timeout={2500}         
        />
      </>
    );
  };
}

export default App;
