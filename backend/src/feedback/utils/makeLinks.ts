export const makeFeedbackLink = (feedbackUid: string): string =>
  `${process.env.CLIENT_ADDRESS}/feedback/${feedbackUid}`;
export const makeReportLink = (reportUid: string): string =>
  `${process.env.CLIENT_ADDRESS}/report/${reportUid}`;
