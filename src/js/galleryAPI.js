import axios from 'axios';
// ------------------------------

const BASE_URL = 'https://pixabay.com/api';

class GallerySearch {
  static q = '';
  static page = 1;
  static per_page = 40;

  static async searchGallery(q) {
    if (!q) {
      q = GallerySearch.q;
    }
    const config = {
      params: {
        key: '29894306-43d43bdf137881a816cea22ba',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    };
    const request = await axios(`${BASE_URL}?q=${q}`, config);
  }
}
