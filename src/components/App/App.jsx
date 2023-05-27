


import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import { getImages } from 'services/getImages';
import { StyledApp } from './App.styled';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalImages: 0,
    status: 'idle',
    notification: { type: '', message: '' }, 
  };

  componentDidUpdate(_, prevState) {
    const { query, page, notification } = this.state;
    const { addImages, handleNotification } = this;

    if (prevState.query !== query || prevState.page !== page) {
      addImages();
    }

    if (prevState.error !== notification && notification) {
      handleNotification();
    }
  }

  handleNotification = () => {
    const notificationType = this.state.notification.type;
    const notificationMessage = this.state.notification.message;

    if (notificationType === 'info') {
      toast.info(notificationMessage);
      this.setState({
        notification: { type: '', message: '' },
      });
    }
    if (notificationType === 'error') {
      toast.error(notificationMessage);
      this.setState({
        notification: { type: '', message: '' },
      });
    }
    if (notificationType === 'success') {
      toast.success(notificationMessage);
      this.setState({
        notification: { type: '', message: '' },
      });
    }
  };

  handleSearch = value => {
    if (!value) {
      this.setState({
        notification: {
          type: 'info',
          message: 'Please enter your search query!',
        },
      });
      return;
    }

    if (value === this.state.query) {
      this.setState({
        notification: {
          type: 'info',
          message:
            'You are seeing the images by this query. Please, change your query.',
        },
      });
      return;
    }

    this.setState({
      query: value,
      images: [],
      page: 1,
      notification: {
        type: '',
        message: '',
      },
      status: 'idle',
    });
  };

  addImages = async () => {
    const { query, page } = this.state;

    this.setState({ status: 'pending' });

    try {
      const { images, totalImages } = await getImages(query, page);

      if (images.length === 0) {
        this.setState({
          notification: {
            type: 'error',
            message:
              'Sorry, there are no images matching your search query. Please try again.',
          },
        });
      }
      if (images.length !== 0 && page === 1) {
        this.setState({
          notification: {
            type: 'success',
            message: `Hooray! We found ${totalImages} images.`,
          },
        });
      }

      if (
        totalImages > 0 &&
        page !== 1 &&
        totalImages <= this.state.images.length + 12
      ) {
        this.setState({
          notification: {
            type: 'info',
            message: 'You have reached the end of search results.',
          },
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        status: 'resolved',
        totalImages,
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({
        notification: {
          type: 'error',
          message: 'There are some problems! Try again later.',
        },
        status: 'rejected',
      });
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images, status, page, totalImages } = this.state;
    const { handleSearch, onLoadMore } = this;

    return (
      <StyledApp>
        <Searchbar onSubmit={handleSearch} />

        {status === 'pending' && <Loader/>}

        {(status === 'resolved' || (status === 'pending' && page !== 1)) && (
          <ImageGallery images={images} />
        )}

        {((totalImages !== images.length && status === 'resolved') ||
          (status === 'pending' && page > 1)) && (
          <Button onClick={onLoadMore} />
        )}

        <ToastWrapper/>
      </StyledApp>
    );
  }
}

export default App;





// import { Component } from 'react';

// export default class App extends Component {
//   state = {
//     tags: null
//   }
//   componentDidMount() {
//     fetch('https://pixabay.com/api/?key=34460710-325a6b1cd40117d9873f8efc0&image_type=photo&orientation=horizontal&page=1&per_page=12&q=dog')
//       .then(res => res.json()).then(tags => this.setState({tags}));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.tags && <div>dog</div>}
//       </div>
//     );
//   }
// }