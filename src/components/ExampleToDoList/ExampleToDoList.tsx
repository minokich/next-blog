'use client';

import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallback, useEffect, useState } from 'react';

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

type ToDoCardProps = {
  task: ToDoListItem;
  onUpdateStatus: (id: number, status: ToDoListItem['status']) => void;
  onDelete: (id: number) => void;
};

const ToDoCard = ({ task, onUpdateStatus, onDelete }: ToDoCardProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDeleteConfirm = () => {
    onDelete(task.id);
    setOpenDialog(false);
  };

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
            right: 48,
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

        <IconButton
          size="small"
          sx={{ position: 'absolute', top: 4, right: 4 }}
          onClick={() => setOpenDialog(true)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>

        <Typography variant="h6" fontWeight="bold">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Task ID: {task.id}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {task.description}
        </Typography>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>ステータス変更</InputLabel>
          <Select
            value={task.status}
            label="ステータス変更"
            onChange={(e) =>
              onUpdateStatus(task.id, e.target.value as ToDoListItem['status'])
            }
          >
            <MenuItem value="To Do">To Do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
      </CardContent>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <DialogContentText>
            「{task.title}」を削除してもいいですか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>キャンセル</Button>
          <Button color="error" onClick={handleDeleteConfirm}>
            削除
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

// TODO:ファイルデカすぎ切り分けたい
const ExampleToDoList = () => {
  const [tasks, setTasks] = useState<ToDoListItem[]>([
    { id: 1, title: 'タスク1', description: '説明文その1', status: 'To Do' },
    {
      id: 2,
      title: 'タスク2',
      description: '説明文その2',
      status: 'In Progress',
    },
    { id: 3, title: 'タスク3', description: '説明文その3', status: 'Done' },
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'To Do' as ToDoListItem['status'],
  });

  const [viewTasks, setViewTasks] = useState<ToDoListItem[]>(tasks);

  const [filteringStatus, setFilteringStatus] = useState<
    'To Do' | 'In Progress' | 'Done' | 'ALL'
  >('ALL');

  const [sortKey, setSortKey] = useState<'id-asc' | 'id-desc' | 'status'>(
    'id-asc',
  );

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    setTasks([...tasks, { id: nextId, ...newTask }]);
    setNewTask({ title: '', description: '', status: 'To Do' });
  };

  const handleFilterTaskList = useCallback(() => {
    const filteringTasks = tasks.filter(
      (task) => filteringStatus === 'ALL' || task.status === filteringStatus,
    );
    setViewTasks(filteringTasks);
  }, [filteringStatus, tasks]);

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilteringStatus(
      event.target.value as 'To Do' | 'In Progress' | 'Done' | 'ALL',
    );
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortKey(event.target.value as 'id-asc' | 'id-desc' | 'status');
  };

  const handleSortTasks = useCallback(
    (tasks: ToDoListItem[]) => {
      const sorted = [...tasks];
      if (sortKey === 'id-asc') {
        sorted.sort((a, b) => a.id - b.id);
      } else if (sortKey === 'id-desc') {
        sorted.sort((a, b) => b.id - a.id);
      } else if (sortKey === 'status') {
        const order = { 'To Do': 1, 'In Progress': 2, Done: 3 };
        sorted.sort((a, b) => order[a.status] - order[b.status]);
      }
      return sorted;
    },
    [sortKey],
  );

  const handleUpdateStatus = (id: number, status: ToDoListItem['status']) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    handleFilterTaskList();
  }, [tasks, filteringStatus, handleFilterTaskList]);

  useEffect(() => {
    const filtered = tasks.filter(
      (task) => filteringStatus === 'ALL' || task.status === filteringStatus,
    );
    setViewTasks(handleSortTasks(filtered));
  }, [tasks, filteringStatus, sortKey, handleSortTasks]);

  return (
    <>
      <Box display="flex" mb={4} gap={2}>
        {/* ソート機能 */}
        <Box width={200}>
          <FormControl fullWidth>
            <InputLabel>ソート</InputLabel>
            <Select value={sortKey} label="ソート" onChange={handleSortChange}>
              <MenuItem value="id-asc">ID（昇順）</MenuItem>
              <MenuItem value="id-desc">ID（降順）</MenuItem>
              <MenuItem value="status">ステータス順</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* フィルター機能 */}
        <Box width={200}>
          <FormControl fullWidth>
            <InputLabel>フィルター</InputLabel>
            <Select
              value={filteringStatus}
              label="Status"
              onChange={handleFilterChange}
            >
              <MenuItem value={'ALL'}>ALL</MenuItem>
              <MenuItem value={'To Do'}>To Do</MenuItem>
              <MenuItem value={'In Progress'}>In Progress</MenuItem>
              <MenuItem value={'Done'}>Done</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* TODO: カンバン形式(Jiraっぽいやつ)やDaDにも対応させる？ */}
      <Box display="flex" gap={2} alignItems="flex-start" mb={4}>
        <Box display="flex" gap={2} flexWrap="wrap">
          {viewTasks.map((task) => (
            <ToDoCard
              key={task.id}
              task={task}
              onUpdateStatus={handleUpdateStatus}
              onDelete={handleDeleteTask}
            />
          ))}
        </Box>
      </Box>

      {/* 入力フォーム */}
      <Box>
        <Card sx={{ width: 300, borderRadius: 3, boxShadow: 3, p: 2 }}>
          <Typography variant="h6" mb={2}>
            新規タスク追加
          </Typography>
          <TextField
            fullWidth
            label="タイトル"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="説明"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            sx={{ mb: 2 }}
          />
          <TextField
            select
            fullWidth
            label="ステータス"
            value={newTask.status}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                status: e.target.value as ToDoListItem['status'],
              })
            }
            sx={{ mb: 2 }}
          >
            <MenuItem value="To Do">To Do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddTask}
          >
            追加
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default ExampleToDoList;
