import axios from 'axios';

export async function getImagesResponse(q, page) {
  return await axios({
    url: 'https://pixabay.com/api/',
    method: 'get',
    params: {
      key: '29712596-a6647cd6fa13e8a799ad6d26d',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    },
  });
}
