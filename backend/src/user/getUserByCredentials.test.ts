import { prisma } from '../server/prisma';
import { getUserByCredentials } from './getUserByCredentials';
import { hashUserPassword } from './hashUserPassword';

describe('getUserByCredentials', () => {
  const credentials = { email: 'test@example.com', password: 'testtest' };
  const user = { ...credentials, name: 'Test' };
  beforeEach(async () => {
    // make user to test
    const data = await hashUserPassword(user);
    await prisma.user.create({ data });

    // make another test user, just to be sure nothing is mixed up
    const anotherUser = {
      email: 'anothertest@example.com',
      name: 'Some Test',
      password: 'tsetest',
    };
    const anotherData = await hashUserPassword(anotherUser);
    await prisma.user.create({ data: anotherData });
  });
  afterEach(async () => {
    await prisma.user.deleteMany();
    await prisma.loginFailedAttempt.deleteMany();
  });

  it('returns correct user with correct credentials', async () => {
    const result = await getUserByCredentials(credentials);
    expect(result?.email).toEqual(user.email);
    expect(result?.name).toEqual(user.name);
  });

  it('returns null with bad email', async () => {
    const result = await getUserByCredentials({
      email: 'bad@example.com',
      password: 'test',
    });
    expect(result).toEqual(null);
  });

  it('returns null with bad password', async () => {
    const result = await getUserByCredentials({
      email: 'test@example.com',
      password: 'badpass',
    });
    expect(result).toEqual(null);
  });
});
