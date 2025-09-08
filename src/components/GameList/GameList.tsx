'use client';

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
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
  const [showCount, setShowCount] = useState(10);

  const handleShowMore = () => {
    setShowCount((prev) => prev + 10);
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
        <List>
          {games.slice(0, showCount).map((game) => (
            <ListItem
              key={game.appid}
              sx={{
                borderBottom: '1px solid #eee',
                py: 1.5,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={game.icon}
                  alt={game.name}
                  sx={{ width: 48, height: 48 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography fontWeight="bold">{game.name}</Typography>}
                secondary={`プレイ時間: ${game.playtime_hours} 時間`}
              />
            </ListItem>
          ))}
        </List>

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
