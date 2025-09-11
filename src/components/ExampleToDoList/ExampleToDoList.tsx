'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';

type ToDoListItem = {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
};

const statusColors: Record<ToDoListItem['status'], string> = {
  'To Do': '#e0e0e0',
  'In Progress': '#64b5f6',
  Done: '#81c784',
};

const ToDoCard = ({ task }: { task: ToDoListItem }) => {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 3,
        boxShadow: 3,
        position: 'relative',
        paddingTop: 3,
      }}
    >
      <CardContent sx={{ paddingTop: 1 }}>
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            px: 1.5,
            py: 0.5,
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            backgroundColor: statusColors[task.status],
            color: '#fff',
          }}
        >
          {task.status}
        </Box>

        <Typography variant="h6" fontWeight="bold">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Task ID: {task.id}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ExampleToDoList = () => {
  const dummyTasks: ToDoListItem[] = [
    { id: 1, title: 'タスク1', description: '説明文その1', status: 'To Do' },
    {
      id: 2,
      title: 'タスク2',
      description: '説明文その2',
      status: 'In Progress',
    },
    { id: 3, title: 'タスク3', description: '説明文その3', status: 'Done' },
  ];

  return (
    <Box display="flex" gap={2}>
      {/* ソート機能 */}
      {/* フィルター機能 */}
      {/* MEMO: DaDにも対応させる？ */}
      {dummyTasks.map((task) => (
        <ToDoCard key={task.id} task={task} />
      ))}

      {/* 入力フォーム */}
    </Box>
  );
};

export default ExampleToDoList;
