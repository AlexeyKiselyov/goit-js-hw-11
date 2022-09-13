import axios from 'axios';
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
  console.log('load more');
  GallerySearch.page += 1;
  const galleryArr = await GallerySearch.searchGallery();
  refGallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryArr));

  if (GallerySearch.page === GallerySearch.totalPages) {
    refLoadMoreBtn.hidden = true;
  }
}

async function onFormSearchSubmit(e) {
  e.preventDefault();
  refGallery.innerHTML = '';
  const query = e.target.elements.searchQuery.value.trim();
  const galleryArr = await GallerySearch.searchGallery(query);
  console.log(galleryArr);
  console.log(GallerySearch.totalPages);
  refGallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryArr));
  refLoadMoreBtn.hidden = false;
}
