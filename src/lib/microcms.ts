import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`,
  headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY || '' },
});

export const getArticles = async () => {
  const allArticles = [];
  let offset = 0;
  const limit = 100; // 1回で取れる最大件数（microCMS仕様）

  while (true) {
    const res = await apiClient.get('/blogs', {
      params: { offset, limit },
    });

    allArticles.push(...res.data.contents);

    // 全件取得済みなら終了
    if (allArticles.length >= res.data.totalCount) break;

    offset += limit;
  }

  return allArticles;
};

export const getArticle = async (id: string) => {
  const res = await apiClient.get(`/blogs/${id}`);
  return res.data;
};
