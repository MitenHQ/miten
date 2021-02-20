import styled from 'styled-components';
import { getData } from './Report/getData';
import { MeetingInfo } from './Report/MeetingInfo';
import { Comments } from './Report/Comments';
import { ReactionsChart } from './Report/ReactionsChart';
import { CommentsChart } from './Report/CommentsChart';

const Root = styled.div`
  margin: auto;
`;

export default function Report() {
  const data = getData().responds;

  return (
    <Root>
      <MeetingInfo title={getData().title} date={getData().date} />
      <ReactionsChart data={data} />
      <CommentsChart data={data} />
      <Comments data={data} />
    </Root>
  );
}
