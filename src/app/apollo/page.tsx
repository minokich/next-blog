'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/generated/graphql';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('hogehoge@example.com');
  const [password, setPassword] = useState('password');
  const [login, { loading, error }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      if (data?.login?.token) {
        localStorage.setItem('token', data.login.token);
        router.push('/apollo/profile');
      }
      router.push('/apollo/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          mx: 'auto',
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h5" align="center">
          ログイン
        </Typography>

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <Alert severity="error">ログインエラー</Alert>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} />}
        >
          {loading ? 'ログイン中…' : 'ログイン'}
        </Button>
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Button href="/apollo/signup">新規登録はこちら</Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
