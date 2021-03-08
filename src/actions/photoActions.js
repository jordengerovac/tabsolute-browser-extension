import { FETCH_PHOTO, TOGGLE_PHOTO, SET_DEFAULT_PHOTO } from './types';

export const fetchPhoto = () => dispatch => {
  const UNSPLASH_API_KEY = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;

  fetch("https://api.unsplash.com/photos/random/?collections=19428159", {
    method: "GET",
    headers: {
      "Authorization": "Client-ID " + UNSPLASH_API_KEY
    }
  })
  .then(res => res.json())
  .then(
    (result) => {
      var photo = result;
      dispatch({
        type: FETCH_PHOTO,
        payload: photo
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
