'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { fetchWeather } from '@/lib/weather';
import { WeatherData } from '@/types/Weather';
import RegionSelectBox from './RegionSelectBox';

const ExampleWeather = () => {
  const [weatherList, setWeatherList] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPref, setSelectedPref] = useState('130000');

  useEffect(() => {
    setLoading(true);
    fetchWeather(selectedPref)
      .then((forecast) => setWeatherList(forecast))
      .catch((err) => {
        console.error(err);
        setWeatherList([]);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 900); //読み込みアニメーションのため、あえて遅延
      });
  }, [selectedPref]);

  const renderIcon = (telop: string) => {
    if (telop.includes('晴'))
      return <WbSunnyIcon fontSize="large" color="warning" />;
    if (telop.includes('くもり'))
      return <CloudIcon fontSize="large" color="action" />;
    if (telop.includes('雨'))
      return <GrainIcon fontSize="large" color="primary" />;
    if (telop.includes('雪'))
      return <AcUnitIcon fontSize="large" color="info" />;
    return <WbSunnyIcon fontSize="large" />;
  };

  return (
    <>
      <RegionSelectBox value={selectedPref} onChange={setSelectedPref} />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '142px',
        }}
      >
        {loading && <CircularProgress size={60} />}
        {!loading && weatherList.length === 0 && (
          <Typography>天気情報を取得できませんでした</Typography>
        )}

        {!loading &&
          weatherList.map((day, idx) => (
            <Paper
              key={idx}
              sx={{
                flexBasis: 'calc(33.333% - 16px)',
                p: 2,
                textAlign: 'center',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                boxShadow: 1,
                minHeight: '142px',
              }}
            >
              <Typography variant="body2">{day.dateLabel}</Typography>
              {renderIcon(day.telop)}
              <Typography
                variant="body2"
                sx={{ wordBreak: 'break-word', whiteSpace: 'normal', mt: 1 }}
              >
                {day.telop.replace(/　/g, '')}
              </Typography>
            </Paper>
          ))}
      </Box>
    </>
  );
};

export default ExampleWeather;
