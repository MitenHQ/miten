import { Request } from 'express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { User } from '@prisma/client';

export type UserWithoutPassword = Omit<User, 'password'>;
export type PartialUser = { id: string } & Partial<UserWithoutPassword>;

export interface ExpressRequest extends Request {
  user?: Partial<PartialUser>;
}

export interface ApolloExpressContext extends ExpressContext {
  req: ExpressRequest;
}
