import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Reactions } from './Feedback/constants';
import { ReactionsForm } from './Feedback/ReactionsForm';
import { DetailsForm } from './Feedback/DetailsForm';
import { useAppAnimations } from './Feedback/useAppAnimations';
import { Submited } from './Feedback/Submited';
import { Footer } from './Feedback/Footer';
import { theme } from '@chakra-ui/react';
import { getBackgroundByReaction } from './Feedback/getBackgroundByReaction';

import { useSaveFeedbackMutation } from '../lib/graphql/hooks';

const Root = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  text-align: center;
  grid-template-rows: 1fr 60px;
`;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  padding: 40px 0 20px 0;
  font-size: 28px;
  color: ${(theme as any).colors.pink[900]};
  font-weight: 500;
`;

const SubTitle = styled(animated.div)`
  font-size: 16px;
  color: #555;
  padding: 20px 10px 0 10px;
`;

const ReactionsFormWrapper = styled.div`
  background: linear-gradient(to left, #c6ffdd99, #fbd78669, #f7797da6);
  transition: 300ms background;
  will-change: background;
`;

const DetailsFormWrapper = styled(animated.div)`
  max-width: 400px;
  margin: auto;
  padding-bottom: 20px;
`;

const detailsList = [
  'Duration',
  'Content',
  'Slides',
  'Tone',
  'Speed',
  'Audience',
  'Reasoning',
  'Agenda',
];

type Props = {
  feedbackUid?: string;
};

const Feedback: FC<Props> = (props) => {
  const [submited, setSubmited] = useState(false);
  const [reaction, setReaction] = useState<Reactions | null>(null);
  const [subtitleAnimation, detailsFormAnimation] = useAppAnimations(reaction);

  // TODO get feedback props from server here e.g. title etc.
  console.log(reaction, 'reaction chie amoo');

  const [saveFeedback, { loading, data, error }] = useSaveFeedbackMutation({
    errorPolicy: 'all',
  });

  const selectReaction = (r: Reactions) => () =>
    reaction ? setReaction(null) : setReaction(r);

  const handleSubmit = (): void => {
    saveFeedback({
      variables: {
        data: { rating: reaction || 1, feedbackUid: props.feedbackUid || '' },
      },
    });
    setSubmited(true);
  };

  if (submited) {
    return <Submited />;
  }

  return (
    <Root>
      <Container>
        <ReactionsFormWrapper style={{ background: getBackgroundByReaction(reaction) }}>
          <Title>How was the meeting?</Title>
          <ReactionsForm reaction={reaction} selectReaction={selectReaction} />
        </ReactionsFormWrapper>
        <SubTitle style={subtitleAnimation}>
          Your feedback helps the organizer to improve the future meetings.
        </SubTitle>
        {reaction && (
          <DetailsFormWrapper style={detailsFormAnimation}>
            <DetailsForm
              items={detailsList}
              reaction={reaction}
              setReaction={setReaction}
              onSubmit={handleSubmit}
            />
          </DetailsFormWrapper>
        )}
      </Container>
      <Footer />
    </Root>
  );
};

export default Feedback;
