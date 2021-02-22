import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Reactions } from './Feedback/constants';
import { ReactionsForm } from './Feedback/ReactionsForm';
import { DetailsForm } from './Feedback/DetailsForm';
import { getTitle } from './Feedback/getTitle';
import { useAppAnimations } from './Feedback/useAppAnimations';
import { Submited } from './Feedback/Submited';
import { Footer } from './Feedback/Footer';

const Root = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  text-align: center;
  grid-template-rows: 1fr 60px;
`;

const Container = styled.div`
  max-width: 400px;
`;

const Title = styled(animated.h1)`
  margin: 50px 0 30px 0;
  font-size: 28px;
  color: #111;
  font-weight: 500;
`;

const SubTitle = styled(animated.div)`
  font-size: 16px;
  color: #555;
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

const Feedback: FC = () => {
  const [submited, setSubmited] = useState(false);
  const [reaction, setReaction] = useState<Reactions | null>(null);
  const [subtitleAnimation, detailsFormAnimation, titleAnimation] = useAppAnimations(
    reaction,
  );

  const selectReaction = (r: Reactions) => () =>
    reaction ? setReaction(null) : setReaction(r);

  const handleSubmit = (): void => setSubmited(true);

  if (submited) {
    return (
      <Root>
        <Submited />
      </Root>
    );
  }

  return (
    <Root>
      <Container>
        <Title style={titleAnimation}>{getTitle(reaction)}</Title>
        <SubTitle style={subtitleAnimation}>
          Your feedback helps the organizer to improve the future meetings.
        </SubTitle>
        <ReactionsForm reaction={reaction} selectReaction={selectReaction} />
        <animated.div style={detailsFormAnimation}>
          <DetailsForm
            items={detailsList}
            reaction={reaction}
            setReaction={setReaction}
            onSubmit={handleSubmit}
          />
        </animated.div>
      </Container>
      <Footer />
    </Root>
  );
};

export default Feedback;
