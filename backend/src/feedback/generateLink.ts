import mail from '@sendgrid/mail';
import { MutationResolvers } from '../graphql/resolvers-types';
import { getOrMakeUser } from '../user/getOrMakeUser';
import { EMAIL_SENDER, FEEDBACK_TEMPLATE_ID, REPLY_TO } from '../utils/constants';
import { isDevEnv } from '../utils/envTools';
import { uniqueId } from '../utils/uniqueId';

export const generateLink: MutationResolvers['generateLink'] = async (
  parent,
  { data: { email } },
  { prisma },
) => {
  const user = await getOrMakeUser({ email });

  const uid = uniqueId();
  await prisma.feedbackBase.create({
    data: { uid, user: { connect: { id: user.id } } },
  });

  const msg = {
    to: email,
    from: {
      name: 'Miten.io',
      email: EMAIL_SENDER,
    },
    reply_to: REPLY_TO,
    templateId: FEEDBACK_TEMPLATE_ID,
    dynamicTemplateData: {
      feedback: `${process.env.CLIENT_ADDRESS}/feedback/${uid}`,
      report: `${process.env.CLIENT_ADDRESS}/report/aaa-bbb-ccc`,
    },
  };

  if (isDevEnv()) {
    console.log('Email sent: ', msg);
  } else {
    await mail.send(msg);
  }

  return {
    // TODO add error handling
    success: true,
  };
};
