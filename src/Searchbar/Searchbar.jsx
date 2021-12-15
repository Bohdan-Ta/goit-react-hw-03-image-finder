// import Searchbar from "./Searchbar";
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { Component } from 'react';
// import { toast } from 'react-toastify';
export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleOnChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;

    if (value.trim() === '') {
      return alert('input name image......');
    }

    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleOnSubmit}>
          <input
            className={s.searchFormInput}
            onChange={this.handleOnChange}
            value={value}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit" className={s.searchFormButton}>
            RUN
          </button>
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
