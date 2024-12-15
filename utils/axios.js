import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.thedogapi.com/v1', // Dog API base URL
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY, // Use an environment variable for the API key
  },
});

export default apiClient;
