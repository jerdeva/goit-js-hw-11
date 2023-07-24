
import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';


async function fetchImgs(searchValue, page = 1) {
    const params = new URLSearchParams({
      key: '38366694-9ace1c8eba851c65d09ce7fab',
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: `${page}`,
    });
            const {data} = await axios.get(`${BASE_URL}?${params}`);
      console.dir(data)
    return data;
  };

export { fetchImgs };