import axios from 'axios';

export const fetchAlbums = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');

    return response.data;

  } catch (error) {
    throw new Error('Error fetching albums');
  }
};