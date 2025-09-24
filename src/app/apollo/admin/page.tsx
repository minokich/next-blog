'use client';
import { useGetMeQuery, useAdminDataQuery } from '@/generated/graphql';
import { Alert, CircularProgress } from '@mui/material';

const AdminPage = () => {
  const { data: meData, loading: meLoading, error: meError } = useGetMeQuery();

  const {
    data: adminData,
    loading: adminLoading,
    error: adminError,
  } = useAdminDataQuery({
    skip: !meData?.me || meData.me.role !== 'ADMIN',
  });

  if (meLoading || adminLoading) {
    return <CircularProgress />;
  }

  if (meError) {
    return (
      <Alert severity="error">非ログインユーザーはアクセスできません</Alert>
    );
  }
  if (!meData?.me) {
    return <Alert severity="error">ユーザー情報が取得できませんでした</Alert>;
  }

  if (meData.me.role !== 'ADMIN') {
    return <Alert severity="error">権限がありません</Alert>;
  }

  return (
    <div>
      <h2>Admin Data</h2>

      {adminError && (
        <Alert severity="error">管理者データの取得に失敗しました</Alert>
      )}
      {!adminError && <pre>{JSON.stringify(adminData, null, 2)}</pre>}
    </div>
  );
};

export default AdminPage;
