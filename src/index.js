import { Notify } from 'notiflix';
import { GallerySearch } from './js/galleryAPI';
import { galleryMarkup } from './js/galleryMarkup';
// ------------------------------

const refFormSearch = document.querySelector('.search-form');
const refGallery = document.querySelector('.gallery');
const refLoadMoreBtn = document.querySelector('.load-more');

refFormSearch.addEventListener('submit', onFormSearchSubmit);
refLoadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

refLoadMoreBtn.hidden = true;

async function onLoadMoreBtnClick() {
  GallerySearch.page += 1;
  const galleryArr = await GallerySearch.searchGallery();

  if (GallerySearch.pageLimit * GallerySearch.page >= galleryArr.totalHits) {
    refLoadMoreBtn.hidden = true;
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
  refGallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryArr.hits));
  const { height: cardHeight } =
    refGallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function onFormSearchSubmit(e) {
  e.preventDefault();
  GallerySearch.page = 1;
  const query = e.target.elements.searchQuery.value.trim();
  GallerySearch.searchGallery(query).then(galleryArr => {
    if (!galleryArr.totalHits) {
      refLoadMoreBtn.hidden = true;
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    refGallery.innerHTML = '';
    refGallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryArr.hits));
    Notify.success(`Hooray! We found ${galleryArr.totalHits} images.`);
    refLoadMoreBtn.hidden = false;
  });
}
