const trackEvent = ({ eventName }: { eventName: string }) => {
  const { plausible } = window as any;
  if (typeof plausible !== 'function') return;

  plausible(eventName);
};

export default trackEvent;
