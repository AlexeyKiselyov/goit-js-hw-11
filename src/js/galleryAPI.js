import axios from 'axios';
// ------------------------------

// const BASE_URL = 'https://pixabay.com/api';

export class GallerySearch {
  static query = '';
  static page = 1;
  static pageLimit = 40;
  static maxPages = 500;
  static totalPages = GallerySearch.maxPages / GallerySearch.pageLimit;

  static async searchGallery(query) {
    if (query) {
      GallerySearch.query = query;
    }
    const config = {
      baseURL: 'https://pixabay.com/api',
      params: {
        q: GallerySearch.query,
        page: GallerySearch.page,
        per_page: GallerySearch.pageLimit,
        key: '29894306-43d43bdf137881a816cea22ba',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    };
    const request = await axios(config);

    return request.data.hits;
  }
}

// ${BASE_URL}?q=${q}&page=${GallerySearch.page}&per_page=${GallerySearch.pageLimit}
