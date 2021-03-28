import { Component } from "react";
import PropTypes from "prop-types";
import s from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    changeQuery: PropTypes.func,
  };
  
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.changeQuery({ query });
    // const {changeQuery} = this.props;
    // changeQuery(this.state.query);
    this.setState({ query: '' });
  };


  render() {
    const { query } = this.state;

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
            name="query"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  };
};

export default Searchbar;
