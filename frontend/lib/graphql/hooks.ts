import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GenerateLink = {
  email: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  reportLink?: Maybe<Scalars['String']>;
};

export type Report = {
  __typename?: 'Report';
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllPermissions: Array<Scalars['String']>;
  report?: Maybe<Report>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryReportArgs = {
  uid?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  forgotPassword?: Maybe<AuthResult>;
  generateLink?: Maybe<Link>;
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

export type GenerateLinkMutationVariables = Exact<{
  data: GenerateLink;
}>;

export type GenerateLinkMutation = { __typename?: 'Mutation' } & {
  generateLink?: Maybe<
    { __typename?: 'Link' } & Pick<Link, 'id' | 'title' | 'link' | 'reportLink'>
  >;
};

export const GenerateLinkDocument = gql`
  mutation generateLink($data: GenerateLink!) {
    generateLink(data: $data) {
      id
      title
      link
      reportLink
    }
  }
`;
export type GenerateLinkMutationFn = Apollo.MutationFunction<
  GenerateLinkMutation,
  GenerateLinkMutationVariables
>;

/**
 * __useGenerateLinkMutation__
 *
 * To run a mutation, you first call `useGenerateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateLinkMutation, { data, loading, error }] = useGenerateLinkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGenerateLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateLinkMutation,
    GenerateLinkMutationVariables
  >,
) {
  return Apollo.useMutation<GenerateLinkMutation, GenerateLinkMutationVariables>(
    GenerateLinkDocument,
    baseOptions,
  );
}
export type GenerateLinkMutationHookResult = ReturnType<typeof useGenerateLinkMutation>;
export type GenerateLinkMutationResult = Apollo.MutationResult<GenerateLinkMutation>;
export type GenerateLinkMutationOptions = Apollo.BaseMutationOptions<
  GenerateLinkMutation,
  GenerateLinkMutationVariables
>;
