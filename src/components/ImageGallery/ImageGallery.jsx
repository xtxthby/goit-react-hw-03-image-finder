
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import {  ListImageGallery  } from './ImageGallery.styled';

function ImageGallery({ images }) {
  return (
    < ListImageGallery >
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ ListImageGallery >
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;








// <ul class="gallery">
//   {/* <!-- Набір <li> із зображеннями --> */}
// </ul>