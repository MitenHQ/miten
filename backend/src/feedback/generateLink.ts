import { MutationResolvers } from '../graphql/resolvers-types';
import { getOrMakeUser } from '../user/getOrMakeUser';
import { uniqueId } from '../utils/uniqueId';

export const generateLink: MutationResolvers['generateLink'] = async (
  parent,
  { data: { email } },
  { prisma },
) => {
  const user = await getOrMakeUser({ email });

  await prisma.feedbackBase.create({
    data: { uid: uniqueId(), user: { connect: { id: user.id } } },
  });
  return {
    // TODO add error handling
    success: true,
  };
};
