import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://api.thecatapi.com/v1/images/search`,
  headers: { 'X-API-KEY': process.env.THE_CAT_API_KEY || '' },
});

export const getCatImages = async (limit: number = 5) => {
  const res = await apiClient.get('', {
    params: {
      limit: limit,
    },
  });
  return res.data;
};
