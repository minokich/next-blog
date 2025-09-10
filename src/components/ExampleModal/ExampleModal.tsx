'use client';

import { Box, Button, Typography, Modal } from '@mui/material';
import { useState } from 'react';

const ExampleModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Open modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            モーダル
          </Typography>
          <Typography sx={{ mt: 2 }}>モーダルだよ</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ExampleModal;
