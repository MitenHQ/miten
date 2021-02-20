export const getStackedChartData = (data) =>
  data.reduce((result, { rating, items }) => {
    return items.reduce((res, item) => {
      const foundIndex = res.findIndex((r) => r.name === item && r.category === rating);

      if (foundIndex !== -1) {
        res[foundIndex].value++;
        return res;
      }
      return [...res, { name: item, category: rating, value: 1 }];
    }, result);
  }, []);
