import { WeatherData, JmaForecastResponseArray } from '@/types/Weather';
import axios from 'axios';

export const fetchWeather = async (
  prefCode: string,
): Promise<WeatherData[]> => {
  const res = await axios.get<JmaForecastResponseArray>(
    `https://www.jma.go.jp/bosai/forecast/data/forecast/${prefCode}.json`,
  );

  const forecastTimeSeries = res.data?.[0]?.timeSeries[0]; // 天気情報

  if (!forecastTimeSeries) {
    console.warn('timeSeries が取得できませんでした');
    return [];
  }

  const area = forecastTimeSeries.areas[0]; // 東京地方など

  // 3日分に変換（気温なし）
  const forecast: WeatherData[] = forecastTimeSeries.timeDefines
    .slice(0, 3)
    .map((date, idx) => ({
      dateLabel: new Date(date).toLocaleDateString('ja-JP', {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric',
      }),
      telop: area.weathers ? area.weathers[idx] : '---',
    }));

  return forecast;
};
