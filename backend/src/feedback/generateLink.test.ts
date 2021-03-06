import { prisma } from '../server/prisma';
import { resolverHelper } from '../graphql/resolverHelper';
import {
  generateLink as generateLinkResolver,
  GENERATE_LINK_DAY_LIMIT,
} from './generateLink';
import mail from '@sendgrid/mail';
import { EMAIL_SENDER, FEEDBACK_TEMPLATE_ID, REPLY_TO } from '../utils/constants';
import { makeFeedbackLink, makeReportLink } from './utils/makeLinks';

const generateLink = resolverHelper(generateLinkResolver);
jest.mock('@sendgrid/mail');
jest.mock('nanoid', () => {
  let x = 0;
  return {
    nanoid: () => 'SOMELONGRANDOMTEXT' + x++,
  };
});
jest.mock('./utils/feedbackUniqueId');

describe('generateLink', () => {
  afterEach(async () => {
    await prisma.feedbackBase.deleteMany();
    await prisma.user.deleteMany();
  });

  it('creates a user and a link and sends it to the mail address', async () => {
    const email = 'test@example.com';
    const result = await generateLink({ data: { email } });
    const userRows = await prisma.user.findMany({});
    expect(userRows.length).toEqual(1);
    const userRow = userRows.pop();
    expect(userRow?.email).toEqual(email);

    const feedbackBaseRows = await prisma.feedbackBase.findMany({});
    expect(feedbackBaseRows.length).toEqual(1);

    const feedbackBaseRow = feedbackBaseRows.pop();
    expect(feedbackBaseRow?.feedbackUid).toEqual('xxx-yyy-zzzz0');
    expect(feedbackBaseRow?.reportUid).toEqual('SOMELONGRANDOMTEXT0');
    expect(feedbackBaseRow?.userId).toEqual(userRow?.id);

    expect(mail.send).toBeCalledTimes(1);
    expect(mail.send).toBeCalledWith({
      dynamicTemplateData: {
        feedback: makeFeedbackLink('xxx-yyy-zzzz0'),
        report: makeReportLink('SOMELONGRANDOMTEXT0'),
      },
      from: { email: EMAIL_SENDER, name: 'Miten.io' },
      reply_to: REPLY_TO,
      templateId: FEEDBACK_TEMPLATE_ID,
      to: email,
    });

    expect(result?.success).toEqual(true);
  });

  it('does not generate more than limit for a single mail address', async () => {
    const email = 'test@example.com';
    for (let index = 0; index < GENERATE_LINK_DAY_LIMIT; index++) {
      await generateLink({ data: { email } });
    }

    const result = await generateLink({ data: { email } });

    expect(result?.success).toEqual(false);
    const anotherResult = await generateLink({ data: { email: 'another@example.com' } });
    expect(anotherResult?.success).toEqual(true);
  });
});
