'use client';

import { useGetMeQuery } from '@/generated/graphql';
import { Alert, Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { data, loading, error } = useGetMeQuery();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/apollo');
  };

  if (loading) return <Typography>読み込み中…</Typography>;

  if (error)
    return (
      <Alert severity="error">非ログインユーザーはアクセスできません</Alert>
    );
  if (!data?.me)
    return <Alert severity="error">ユーザー情報が取得できませんでした</Alert>;
  return (
    <Box sx={{ mt: 4, maxWidth: 900, mx: 'auto' }}>
      <Box>
        <Typography variant="h4">プロフィール</Typography>
        <Typography sx={{ mt: 2 }}>ID: {data.me.id}</Typography>
        <Typography>名前: {data.me.name}</Typography>
        <Typography>Email: {data.me.email}</Typography>
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleLogout}
        sx={{ mt: 2 }}
      >
        ログアウト
      </Button>
    </Box>
  );
};

export default ProfilePage;
