import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`,
  headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY || '' },
});

export const getArticles = async () => {
  const res = await apiClient.get('/blogs');
  return res.data.contents;
};

export const getArticle = async (id: string) => {
  const res = await apiClient.get(`/blogs/${id}`);
  return res.data;
};
