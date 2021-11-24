import axios from 'axios';
import { variables } from './variables';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24479439-fad8fccb3aca2f73405340c7a';
axios.defaults.baseURL = BASE_URL;

const fetchImages = async input => {
  const queryParams = new URLSearchParams({
    key: API_KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: variables.limit,
    page: variables.page,
  });

  const { data } = await axios.get('?' + queryParams.toString());
  return data;
};

export default fetchImages;
