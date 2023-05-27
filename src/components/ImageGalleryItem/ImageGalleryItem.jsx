

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem,  Picture } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImageURL: this.props.largeImageURL,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { largeImageURL, showModal } = this.state;
    const { webformatURL, tags } = this.props;
    const { toggleModal } = this;

    return (
      <>
        <ListItem onClick={toggleModal}>
          <Picture src={webformatURL} alt={tags} />
        </ListItem>
        {showModal && (
          <Modal onClose={toggleModal} large={largeImageURL} alt={tags} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;






// {/* <li class="gallery-item">
//   <img src="" alt="" />
// </li> */}