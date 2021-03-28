import React, { FC } from 'react';
import { LeftContentBlock } from './Home/LeftContentBlock';
import { RightContentBlock } from './Home/RightContentBlock';
import { EmailForm } from './Home/EmailForm';

const Home: FC = () => {
  return (
    <>
      <RightContentBlock
        title="Improve your meetings by getting feedback"
        content="Enter your email to receive a feedback link form in your email."
        icon="product-launch.svg"
        id="intro"
      >
        <EmailForm />
      </RightContentBlock>
      <LeftContentBlock
        title="Enter your email to get started"
        content="You will receive a feedback form link and a report page link."
        section={[
          {
            title: 'Feedback form',
            content: 'A feedback form to share with your audience.',
            icon: 'notes.svg',
          },
          {
            title: 'Reports page',
            content: 'Feedback results will appear there in the reports page.',
            icon: 'notes.svg',
          },
        ]}
        icon="developer.svg"
        id="about"
      />
      <RightContentBlock
        title="Ask your audience to share their feedback"
        content="You can share the feedback link in the meeting invitation and maybe even reminding them to cast their feedback."
        icon="waving.svg"
        id="mission"
      />
      <LeftContentBlock
        title="That's about it!"
        content="Visit the reports page from your email and you'll see the results there."
        icon="graphs.svg"
        id="product"
      />
    </>
  );
};

export default Home;
