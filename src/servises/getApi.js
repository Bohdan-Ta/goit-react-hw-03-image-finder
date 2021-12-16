import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '24045276-2d1f958b632c915d7d2587282';

export async function fetch(name, page) {
  const searchParams = new URLSearchParams({
    q: name,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
  });

  let url = `${BASE_URL}?key=${KEY}&${searchParams}`;

  try {
    const response = await axios.get(url);
    const result = await response.data;
    return result;
  } catch (error) {
    toast.dark(`No image with  ${name}`);
  }
}
