import apiClient from '@/utils/axios';


export const fetchBreeds = async () => {
  try {
    const response = await apiClient.get('/breeds', {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY || '',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching breed data:', error);
    throw error;
  }
};
