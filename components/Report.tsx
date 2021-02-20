import styled from 'styled-components';
import { D3Wrapper } from './Report/D3Wrapper';
import { makeBarChart } from './Report/makeBarChart';
import { makeStackedBarChart } from './Report/makeStackedBarChart';
import { getData } from './Report/getData';

const Root = styled.div`
  background-color: #fff;
  justify-items: center;
  text-align: center;
`;

const StackedChart = styled(D3Wrapper)`
  text {
    transition: 200ms opacity;
  }

  g:hover > text {
    opacity: 1;
  }
`;

export default function Report() {
  const ratings = [
    { rating: 1, name: '😠', value: 0 },
    { rating: 2, name: '😕', value: 0 },
    { rating: 3, name: '😐', value: 0 },
    { rating: 4, name: '😊', value: 0 },
    { rating: 5, name: '😍', value: 0 },
  ];

  const barChartData = getData().reduce((result, item) => {
    result[item.rating - 1].value = result[item.rating - 1].value + 1;
    return result;
  }, ratings);

  const stackedChartData = getData().reduce((result, { rating, items }) => {
    return items.reduce((res, item) => {
      const foundIndex = res.findIndex((r) => r.name === item && r.category === rating);

      if (foundIndex !== -1) {
        res[foundIndex].value++;
        return res;
      }
      return [...res, { name: item, category: rating, value: 1 }];
    }, result);
  }, []);

  return (
    <Root>
      <div>
        <div>Staff meeting</div>
        <div>Feb. 23th 2021</div>
      </div>
      <div>Responses to "how was the meeting experience?"</div>
      <D3Wrapper data={barChartData} makeChart={makeBarChart} />
      <div>Areas of strength and improvement</div>

      <StackedChart data={stackedChartData} makeChart={makeStackedBarChart} />
      <div>How to read this chart?</div>
      <div>
        <p>
          The more each part grown on the left side, means more people answered the
          question of "What to fix" with that answer.
        </p>
        <p>
          The goal of Miten is to show areas of improvement, this chart is supposed to
          show that. That's why we ask "What to fix?" when the meeting experience was
          "Good" or lower.
        </p>
        <p>
          We asked people who reacted "Awesome" what was good, and the responses are on
          the right side in green.
        </p>
      </div>
      <div>
        <div>Written comments</div>
        <div>
          {getData().map(({ rating, comment }, i) => {
            if (!comment) return null;
            return (
              <div>
                <span>{ratings[rating - 1].name}</span>
                <span>{comment}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Root>
  );
}
