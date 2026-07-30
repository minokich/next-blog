'use client';

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Avatar,
  Box,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

type SteamGame = {
  appid: number;
  name: string;
  playtime_hours: number;
  icon: string;
};

type GameListProps = {
  games: SteamGame[];
};

const GameList = ({ games }: GameListProps) => {
  const [showCount, setShowCount] = useState(50);

  const handleShowMore = () => {
    setShowCount((prev) => prev + 50);
  };

  return (
    <Accordion
      sx={{ mt: 1 }}
      slotProps={{
        transition: {
          timeout: { enter: 550, exit: 550 },
          easing: {
            enter: 'ease-in',
            exit: 'ease-out',
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          minHeight: 64,
          maxHeight: 64,
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
        }}
      >
        <Typography
          component="span"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Steam Game List
          <Typography component="span" fontSize={20} sx={{ ml: 0.5 }}>
            {games.length}
          </Typography>
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1,
  }}
>
  {games.slice(0, showCount).map((game) => (
    <Box
      key={game.appid}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        border: '1px solid #eee',
        borderRadius: 1,
      }}
    >
      <Avatar
        variant="rounded"
        src={game.icon}
        alt={game.name}
        sx={{
          width: 40,
          height: 40,
          mr: 1,
        }}
      />

      <<Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <Typography
          noWrap
          fontWeight="bold"
          fontSize={14}
        >
          {game.name}
        </Typography>
      
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {game.playtime_hours} 時間
        </Typography>
      </Box>
    </Box>
  ))}
</Box>

        {showCount < games.length && (
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={handleShowMore}>
              もっと見る
            </Button>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default GameList;
