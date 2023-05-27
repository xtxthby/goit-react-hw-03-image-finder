import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent,
  ModalDescr, ModalPicture,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // при першому розгортанні модалки вішаю слухача події
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBackdropeClick);
  }
  // при натисканні Escape закриваю модалку
  handleKeyDown = e => {
    if (e.code === `Escape`) {
      this.props.onClose();
    }
  };
  // при кліку на бекдроп закриваю модалку
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { large, tags } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          {/* тут більший розмір картинки */}
          <ModalPicture src={large} alt={tags} />
          {/* назва картинки */}
          <ModalDescr>{tags}</ModalDescr>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  large: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal


