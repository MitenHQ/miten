import { ApolloExpressContext } from '../types';
import { prisma } from './prisma';
import { checkMissingPermissions } from '../user/permissions/checkMissingPermissions';

// This file will make apollo context available for resolvers

export type ApolloContext = {
  prisma: typeof prisma;
  ip: string;
  user: ApolloExpressContext['req']['user'] | null;
  isAuthenticated: () => boolean;
  checkMissingPermissions: (neededPermissions: string[], cacheKey: string) => string[];
};

export const apolloContext = ({ req }: ApolloExpressContext): ApolloContext => ({
  prisma,
  ip: req.ip,
  user: req.user,
  isAuthenticated: () => !!req.user,
  checkMissingPermissions: checkMissingPermissions(req.user),
});
