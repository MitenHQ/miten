import { prisma } from '../../server/prisma';
import { UserWithoutPassword } from '../../types';
import { userFields } from './constants';

export const getUserById = (id: number): Promise<Partial<UserWithoutPassword> | null> =>
  prisma.user.findUnique({
    where: { id },
    select: userFields,
  });
