export function galleryMarkup(arr) {
  const newMarkup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><span>${likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b><span>${views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b><span>${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b><span>${downloads}</span>
    </p>
  </div>
</div> `;
      }
    )
    .join('');
  return newMarkup;
}

/* <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>; */

//    <div class="photo-card">
//   <img src="" alt="" loading="lazy"/>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>
//   </div>
// </div>;

// hits[{}]
// webformatURL  - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.
