import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApolloContext } from '../server/apolloContext';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type GenerateLink = {
  email: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type FeedbackResponse = {
  __typename?: 'FeedbackResponse';
  id: Scalars['Int'];
  rating: Scalars['Int'];
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  comment?: Maybe<Scalars['String']>;
  feedbackBase?: Maybe<FeedbackBase>;
  feedbackBaseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FeedbackBase = {
  __typename?: 'FeedbackBase';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  feedbackUid: Scalars['String'];
  reportUid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  feedbackResponses: Array<FeedbackResponse>;
};

export type Query = {
  __typename?: 'Query';
  getAllPermissions: Array<Scalars['String']>;
  report?: Maybe<FeedbackBase>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryReportArgs = {
  reportUid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  forgotPassword?: Maybe<AuthResult>;
  generateLink?: Maybe<Response>;
  login?: Maybe<AuthResult>;
  register?: Maybe<AuthResult>;
  resetPassword?: Maybe<AuthResult>;
  updateUser?: Maybe<User>;
  validateSocialLogin?: Maybe<AuthResult>;
};

export type MutationCreateUserArgs = {
  user: UserInput;
};

export type MutationForgotPasswordArgs = {
  credentials: EmailInput;
};

export type MutationGenerateLinkArgs = {
  data: GenerateLink;
};

export type MutationLoginArgs = {
  credentials: CredentialsInput;
};

export type MutationRegisterArgs = {
  user: UserInput;
};

export type MutationResetPasswordArgs = {
  credentials: NewPasswordInput;
};

export type MutationUpdateUserArgs = {
  user: AdminUserInput;
};

export type MutationValidateSocialLoginArgs = {
  credentials: SocialLoginInput;
};

export type UserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminUserInput = {
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['String']>>;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type NewPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export enum AuthServices {
  Google = 'GOOGLE',
}

export type SocialLoginInput = {
  service: AuthServices;
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthResult = {
  __typename?: 'AuthResult';
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  GenerateLink: GenerateLink;
  String: ResolverTypeWrapper<Scalars['String']>;
  Response: ResolverTypeWrapper<Response>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FeedbackResponse: ResolverTypeWrapper<FeedbackResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  FeedbackBase: ResolverTypeWrapper<FeedbackBase>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  UserInput: UserInput;
  AdminUserInput: AdminUserInput;
  CredentialsInput: CredentialsInput;
  EmailInput: EmailInput;
  NewPasswordInput: NewPasswordInput;
  AuthServices: AuthServices;
  SocialLoginInput: SocialLoginInput;
  User: ResolverTypeWrapper<User>;
  AuthResult: ResolverTypeWrapper<AuthResult>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  GenerateLink: GenerateLink;
  String: Scalars['String'];
  Response: Response;
  Boolean: Scalars['Boolean'];
  FeedbackResponse: FeedbackResponse;
  Int: Scalars['Int'];
  FeedbackBase: FeedbackBase;
  Query: {};
  Mutation: {};
  DateTime: Scalars['DateTime'];
  UserInput: UserInput;
  AdminUserInput: AdminUserInput;
  CredentialsInput: CredentialsInput;
  EmailInput: EmailInput;
  NewPasswordInput: NewPasswordInput;
  SocialLoginInput: SocialLoginInput;
  User: User;
  AuthResult: AuthResult;
}>;

export type ResponseResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']
> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeedbackResponseResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['FeedbackResponse'] = ResolversParentTypes['FeedbackResponse']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedbackBase?: Resolver<Maybe<ResolversTypes['FeedbackBase']>, ParentType, ContextType>;
  feedbackBaseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeedbackBaseResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['FeedbackBase'] = ResolversParentTypes['FeedbackBase']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedbackUid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reportUid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  feedbackResponses?: Resolver<
    Array<ResolversTypes['FeedbackResponse']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  getAllPermissions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  report?: Resolver<
    Maybe<ResolversTypes['FeedbackBase']>,
    ParentType,
    ContextType,
    RequireFields<QueryReportArgs, 'reportUid'>
  >;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'user'>
  >;
  forgotPassword?: Resolver<
    Maybe<ResolversTypes['AuthResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, 'credentials'>
  >;
  generateLink?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<MutationGenerateLinkArgs, 'data'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['AuthResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'credentials'>
  >;
  register?: Resolver<
    Maybe<ResolversTypes['AuthResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'user'>
  >;
  resetPassword?: Resolver<
    Maybe<ResolversTypes['AuthResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationResetPasswordArgs, 'credentials'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'user'>
  >;
  validateSocialLogin?: Resolver<
    Maybe<ResolversTypes['AuthResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationValidateSocialLoginArgs, 'credentials'>
  >;
}>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type UserResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthResultResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['AuthResult'] = ResolversParentTypes['AuthResult']
> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Response?: ResponseResolvers<ContextType>;
  FeedbackResponse?: FeedbackResponseResolvers<ContextType>;
  FeedbackBase?: FeedbackBaseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  AuthResult?: AuthResultResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
