import { FETCH_PHOTO } from './types';

export const fetchPhoto = () => dispatch => {
  const UNSPLASH_API_KEY = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  fetch("https://api.unsplash.com/collections/4578671/photos/?orientation=landscape&per_page=100&client_id=" + UNSPLASH_API_KEY)
  .then(res => res.json())
  .then(
    (result) => {
      var random_num = Math.floor(Math.random() * result.length);
      var photo = result[random_num]
      dispatch({
        type: FETCH_PHOTO,
        payload: photo
    });
  })
}
