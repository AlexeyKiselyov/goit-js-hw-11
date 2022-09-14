import axios from 'axios';
// ------------------------------

export class GallerySearch {
  static query = '';
  static page = 1;
  static pageLimit = 40;

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
    try {
      const request = await axios(config);

      return request.data;
    } catch (err) {
      console.log;
    }
  }
}
