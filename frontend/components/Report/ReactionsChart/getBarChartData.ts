const ratings = [
  { rating: 1, name: '😠', value: 0 },
  { rating: 2, name: '😕', value: 0 },
  { rating: 3, name: '😐', value: 0 },
  { rating: 4, name: '😊', value: 0 },
  { rating: 5, name: '😍', value: 0 },
];

export const getBarChartData = (data: any) =>
  data.reduce((result: any, item: any) => {
    result[item.rating - 1].value = result[item.rating - 1].value + 1;
    return result;
  }, ratings);
