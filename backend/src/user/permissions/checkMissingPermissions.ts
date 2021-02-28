import { difference } from 'lodash';
import { UserWithoutPassword } from '../../types';
import { isDevEnv } from '../../utils/envTools';

export const checkMissingPermissions = (
  user: Partial<UserWithoutPassword> | undefined,
) => (neededPermissions: string[]): string[] => {
  if (!user) return neededPermissions;

  // exceptionally skip permission check if it's a development environment
  if (isDevEnv()) return [];

  if (!user.permissions) return neededPermissions;
  return difference(neededPermissions, user.permissions);
};
