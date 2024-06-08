import axios from 'axios';

export const fetchPhotos = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');

    return response.data;

  } catch (error) {
    throw new Error('Error fetching photos');
  }
};