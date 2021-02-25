import { FETCH_PHOTO, TOGGLE_PHOTO, SET_DEFAULT_PHOTO } from './types';
import store from '../store';

export const fetchPhoto = () => dispatch => {
  const UNSPLASH_API_KEY = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  var last_photo_index = store.getState().photoDetails.lastPhotoIndex;
  var random_page_num = Math.floor(Math.random() * 122);
  while (random_page_num === last_photo_index) {
    random_page_num = Math.floor(Math.random() * 122);
  }
  fetch("https://api.unsplash.com/collections/19428159/photos/?page=" + random_page_num + "&per_page=1&client_id=" + UNSPLASH_API_KEY)
  .then(res => res.json())
  .then(
    (result) => {
      var photo = result[0];
      dispatch({
        type: FETCH_PHOTO,
        payload: photo,
        lastPhotoIndex: random_page_num
    });
  })
  .catch(function(error) {
    console.log(error);
  });
}

export const togglePhoto = (event) => dispatch => {
  dispatch({
    type: TOGGLE_PHOTO,
    payload: event
  })
}

export const setDefaultPhoto = () => dispatch => {
  dispatch({
    type: SET_DEFAULT_PHOTO
  })
}
