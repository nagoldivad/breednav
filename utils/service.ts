import apiClient from '@/utils/axios';

// for fetching list of all breeds
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

// fetch breed-specific images
export const fetchBreedImages = async (breedId: number, limit: number = 6) => {
  try {
    const response = await apiClient.get('/images/search', {
      params: {
        breed_id: breedId,
        limit: limit,
      },
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY || '',
      },
    });
    return response.data.map((image: any) => image.url); // Return array of image URLs
  } catch (error) {
    console.error(`Error fetching images for breed ID ${breedId}:`, error);
    throw error;
  }
};
