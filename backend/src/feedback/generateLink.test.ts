import { prisma } from '../server/prisma';
import { resolverHelper } from '../graphql/resolverHelper';
import { generateLink as generateLinkResolver } from './generateLink';
const generateLink = resolverHelper(generateLinkResolver);

describe('generateLink', () => {
  // const user = { email: 'test@test.test', name: 'Test', password: 'testtest' };
  // beforeEach(async () => {
  //   // make user to test
  //   const data = await hashUserPassword(user);
  //   await prisma.user.create({ data });

  //   // make another test user, just to be sure nothing is mixed up
  //   const anotherUser = {
  //     email: 'anothertest@test.test',
  //     name: 'Some Test',
  //     password: 'tsetest',
  //   };
  //   const anotherData = await hashUserPassword(anotherUser);
  //   await prisma.user.create({ data: anotherData });
  // });
  afterEach(async () => {
    await prisma.user.deleteMany();
    await prisma.feedbackBase.deleteMany();
  });

  it('creates an user and a link and sends it to the mail address', async () => {
    const result = await generateLink({
      data: { email: 'test@test.test' },
    });

    expect(result?.success).toEqual(true);
  });
});
