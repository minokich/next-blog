export type WeatherData = {
  dateLabel: string;
  telop: string;
};

export type JmaForecastResponse = {
  publishingOffice: string;
  reportDateTime: string;
  timeSeries: Array<{
    timeDefines: string[];
    areas: Array<{
      area: {
        name: string;
        code: string;
      };
      weathers?: string[];
    }>;
  }>;
};

export type JmaForecastResponseArray = JmaForecastResponse[];
