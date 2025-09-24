'use client';

import { useGetMeQuery, useMyNotificationsQuery } from '@/generated/graphql';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { data: meData, loading: meLoading, error: meError } = useGetMeQuery();
  const {
    data: notificationData,
    loading: notificationLoading,
    error: notificationError,
  } = useMyNotificationsQuery({
    skip: !meData?.me,
  });
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/apollo');
  };

  if (meLoading) return <CircularProgress />;

  if (meError)
    return (
      <Alert severity="error">非ログインユーザーはアクセスできません</Alert>
    );
  if (!meData?.me)
    return <Alert severity="error">ユーザー情報が取得できませんでした</Alert>;
  return (
    <Box sx={{ mt: 4, maxWidth: 900, mx: 'auto' }}>
      <Box>
        <Typography variant="h4">プロフィール</Typography>
        <Typography sx={{ mt: 2 }}>ID: {meData.me.id}</Typography>
        <Typography>名前: {meData.me.name}</Typography>
        <Typography>Email: {meData.me.email}</Typography>
        {meData.me.role === 'ADMIN' && (
          <Button href="/apollo/admin">管理者ページ</Button>
        )}
      </Box>
      <Box>
        <List>
          {notificationLoading && <CircularProgress />}
          {notificationLoading && (
            <Alert severity="error">おしらせ情報が取得できませんでした</Alert>
          )}
          {!notificationLoading &&
            !notificationError &&
            notificationData?.myNotifications.map((n) => (
              <ListItem key={n.id}>
                {format(new Date(n.createdAt), 'yyyy/MM/dd')}
                {n.message}
              </ListItem>
            ))}
        </List>
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
