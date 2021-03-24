import { Component } from "react";
import PropTypes from "prop-types";
// import "../Styles/Styles.module.css";

class Searchbar extends Component {
  state = {
    showModal: false,
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    // const { handleChange, handleSubmit } = this;
    const { query } = this.state;

    return (
      <>
       <header className="Searchbar">
        <form  onSubmit={this.handleSubmit} className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
          />
        </form>
      </header>
      </>
    );
  };
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
