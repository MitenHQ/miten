type eventNames = 'generateLinkClicked';

const trackEvent = ({ eventName }: { eventName: eventNames }) => {
  const { plausible } = window as any;
  if (typeof plausible !== 'function') return;

  plausible(eventName);
};

export default trackEvent;
