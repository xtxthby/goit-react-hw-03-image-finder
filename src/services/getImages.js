// const BASE_URL = `https://pixabay.com/api/`;

// const API_KEY = `34460710-325a6b1cd40117d9873f8efc0`;

// function getImages(searchText, page = 1) {
//      // робимо запрос
//   return fetch(`${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}
//     &page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//       // якщо на response тру ,все гаразд то повертаемо результат парса
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(
//         `Oops... there are no ${searchText} images matching your search... `
//       )
//     );
//   });
// };

// const api = {
//   getImages,
// };

// export default api;
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34460710-325a6b1cd40117d9873f8efc0';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const images = response.data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }
  );
  return { images, totalImages: response.data.totalHits };
};