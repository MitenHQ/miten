import { ChartFeedbackResponse } from '../types';

export const getStackedChartData = (data: ChartFeedbackResponse[]) =>
  data.reduce((result: any, { rating, items }: ChartFeedbackResponse) => {
    return (items || []).reduce((res: any, item: any) => {
      const foundIndex = res.findIndex(
        (r: any) => r.name === item && r.category === rating,
      );

      if (foundIndex !== -1) {
        res[foundIndex].value++;
        return res;
      }
      return [...res, { name: item, category: rating, value: 1 }];
    }, result);
  }, []);
