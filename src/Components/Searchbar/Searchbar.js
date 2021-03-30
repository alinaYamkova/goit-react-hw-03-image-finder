import { Component } from "react";
import PropTypes from "prop-types";
import s from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  
  state = {
    searchQuery: '',
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    // const { searchQuery } = this.state;
    this.props.onSubmit( this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
       <header className={s.Searchbar}>
        <form  onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  };
};

export default Searchbar;
