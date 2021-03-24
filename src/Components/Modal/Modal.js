import { Component } from "react";
import { createPortal } from "react-dom";
// import "../Styles/Styles.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillMount() {
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
    if (e.target === e.currentTurget) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal" onClick={this.props.children}></div>
      </div>,
      modalRoot
    );
  }
}
