'use client';
import { useGetMeQuery } from '@/generated/graphql';
import { Alert } from '@mui/material';

const AdminPage = () => {
  const { data, loading, error } = useGetMeQuery();
  if (error)
    return (
      <Alert severity="error">非ログインユーザーはアクセスできません</Alert>
    );
  if (!data?.me)
    return <Alert severity="error">ユーザー情報が取得できませんでした</Alert>;

  if (data?.me.role !== 'ADMIN') {
    return <p>権限がありません</p>;
  }

  return <p>権限あり</p>;
};

export default AdminPage;
