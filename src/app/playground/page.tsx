'use client';

import ExampleCardFlip from '@/components/ExampleCardFlip/ExampleCardFlip';
import ExampleDragDropList from '@/components/ExampleDragDropList/ExampleDragDropList';
import ExampleLinearProgressWithLabel from '@/components/ExampleLinearProgressWithLabel/ExampleLinearProgressWithLabel';
import ExampleModal from '@/components/ExampleModal/ExampleModal';
import ExampleSlideshow from '@/components/ExampleSlideshow/ExampleSlideshow';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';

export default function PlaygroundPage() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Playground
      </Typography>
      <Typography>
        UIコンポーネントやアニメーションなどの試しに作ったものを置いていくページです。
      </Typography>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">カウンター</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
            <Button variant="contained" onClick={() => setCount(count - 1)}>
              -
            </Button>
            <Typography variant="h5">{count}</Typography>
            <Button variant="contained" onClick={() => setCount(count + 1)}>
              +
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">ドラッグアンドドロップ</Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-evenly' }}>
            <Box>
              <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
                縦方向
              </Typography>
              <Box
                sx={{
                  width: 100,
                  border: '1px solid #ddd',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ExampleDragDropList itemCount={5} />
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
                横方向
              </Typography>
              <Box
                sx={{
                  width: 'auto',
                  border: '1px solid #ddd',
                  padding: '10px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ExampleDragDropList layout="horizontal" itemCount={6} />
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
                グリッド
              </Typography>
              <Box
                sx={{
                  width: 310,
                  border: '1px solid #ddd',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ExampleDragDropList layout="grid" itemCount={25} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">スライドショー</Typography>
          <Box sx={{ mt: 2 }}>
            <ExampleSlideshow />
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">カードフリップ</Typography>
          <Box sx={{ mt: 2 }}>
            <ExampleCardFlip spin={4} />
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">
            プログレスバー & 読込中のグルグル
          </Typography>
          <Box sx={{ mt: 2 }}>
            <ExampleLinearProgressWithLabel />
            <ExampleLinearProgressWithLabel color="secondary" />
            <CircularProgress />
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">モーダル/ダイアログ</Typography>
          <Box sx={{ mt: 2 }}>
            <ExampleModal />
          </Box>
        </CardContent>
      </Card>
      {/* 
      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">Todoリスト</Typography>
          <Box sx={{ mt: 2 }}>
            
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">検索フィルター付きリスト</Typography>
          <Box sx={{ mt: 2 }}>
            
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          
          <Typography variant="h6">グラフ表示 (RechartsやChart.js)</Typography>
          <Box sx={{ mt: 2 }}>
            バー、折れ線、円グラフ。アニメーション付きにしたい
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h6">3D描画(tree.js)</Typography>
          <Box sx={{ mt: 2 }}>
            
          </Box>
        </CardContent>
      </Card>
      なんか思いついたら追加 */}
    </Container>
  );
}
