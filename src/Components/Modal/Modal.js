import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from '../Searchbar/Searchbar.module.css';


const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  static propTypes = {
    handleBackdropClick: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }
  //закриття по Escape
  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  //  //закриття по BackdropClick
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
