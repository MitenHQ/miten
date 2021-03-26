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
  DateTime: any;
};

export type GenerateLink = {
  email: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type SaveFeedback = {
  feedbackUid: Scalars['String'];
  rating: Scalars['Int'];
  items: Array<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type FeedbackResponse = {
  __typename?: 'FeedbackResponse';
  id: Scalars['String'];
  rating: Scalars['Int'];
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  comment?: Maybe<Scalars['String']>;
  feedbackBase?: Maybe<FeedbackBase>;
  feedbackBaseId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FeedbackBase = {
  __typename?: 'FeedbackBase';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  feedbackUid: Scalars['String'];
  reportUid: Scalars['String'];
  feedbackLink: Scalars['String'];
  reportLink: Scalars['String'];
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
  saveFeedback?: Maybe<Response>;
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

export type MutationSaveFeedbackArgs = {
  data: SaveFeedback;
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
  id: Scalars['String'];
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
  id?: Maybe<Scalars['String']>;
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

export type ForgotPasswordMutationVariables = Exact<{
  credentials: EmailInput;
}>;

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & {
  forgotPassword?: Maybe<
    { __typename?: 'AuthResult' } & Pick<AuthResult, 'success' | 'message'>
  >;
};

export type ResetPasswordMutationVariables = Exact<{
  credentials: NewPasswordInput;
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword?: Maybe<
    { __typename?: 'AuthResult' } & Pick<AuthResult, 'success' | 'message' | 'token'>
  >;
};

export type LoginMutationVariables = Exact<{
  credentials: CredentialsInput;
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'AuthResult' } & Pick<AuthResult, 'success' | 'token' | 'message'>
  >;
};

export type RegisterMutationVariables = Exact<{
  user: UserInput;
}>;

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<
    { __typename?: 'AuthResult' } & Pick<AuthResult, 'success' | 'token' | 'message'>
  >;
};

export type ValidateSocialLoginMutationVariables = Exact<{
  credentials: SocialLoginInput;
}>;

export type ValidateSocialLoginMutation = { __typename?: 'Mutation' } & {
  validateSocialLogin?: Maybe<
    { __typename?: 'AuthResult' } & Pick<AuthResult, 'success' | 'token' | 'message'>
  >;
};

export type GetReportQueryVariables = Exact<{
  reportUid: Scalars['String'];
}>;

export type GetReportQuery = { __typename?: 'Query' } & {
  report?: Maybe<
    { __typename?: 'FeedbackBase' } & Pick<
      FeedbackBase,
      'id' | 'title' | 'feedbackLink' | 'createdAt' | 'updatedAt'
    > & {
        feedbackResponses: Array<
          { __typename?: 'FeedbackResponse' } & Pick<
            FeedbackResponse,
            'id' | 'rating' | 'items' | 'comment'
          >
        >;
      }
  >;
};

export type GenerateLinkMutationVariables = Exact<{
  data: GenerateLink;
}>;

export type GenerateLinkMutation = { __typename?: 'Mutation' } & {
  generateLink?: Maybe<
    { __typename?: 'Response' } & Pick<Response, 'success' | 'message'>
  >;
};

export type SaveFeedbackMutationVariables = Exact<{
  data: SaveFeedback;
}>;

export type SaveFeedbackMutation = { __typename?: 'Mutation' } & {
  saveFeedback?: Maybe<
    { __typename?: 'Response' } & Pick<Response, 'success' | 'message'>
  >;
};

export const ForgotPasswordDocument = gql`
  mutation forgotPassword($credentials: EmailInput!) {
    forgotPassword(credentials: $credentials) {
      success
      message
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >,
) {
  return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
    ForgotPasswordDocument,
    baseOptions,
  );
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation resetPassword($credentials: NewPasswordInput!) {
    resetPassword(credentials: $credentials) {
      success
      message
      token
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(
    ResetPasswordDocument,
    baseOptions,
  );
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation login($credentials: CredentialsInput!) {
    login(credentials: $credentials) {
      success
      token
      message
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation register($user: UserInput!) {
    register(user: $user) {
      success
      token
      message
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    baseOptions,
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const ValidateSocialLoginDocument = gql`
  mutation validateSocialLogin($credentials: SocialLoginInput!) {
    validateSocialLogin(credentials: $credentials) {
      success
      token
      message
    }
  }
`;
export type ValidateSocialLoginMutationFn = Apollo.MutationFunction<
  ValidateSocialLoginMutation,
  ValidateSocialLoginMutationVariables
>;

/**
 * __useValidateSocialLoginMutation__
 *
 * To run a mutation, you first call `useValidateSocialLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateSocialLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateSocialLoginMutation, { data, loading, error }] = useValidateSocialLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useValidateSocialLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ValidateSocialLoginMutation,
    ValidateSocialLoginMutationVariables
  >,
) {
  return Apollo.useMutation<
    ValidateSocialLoginMutation,
    ValidateSocialLoginMutationVariables
  >(ValidateSocialLoginDocument, baseOptions);
}
export type ValidateSocialLoginMutationHookResult = ReturnType<
  typeof useValidateSocialLoginMutation
>;
export type ValidateSocialLoginMutationResult = Apollo.MutationResult<ValidateSocialLoginMutation>;
export type ValidateSocialLoginMutationOptions = Apollo.BaseMutationOptions<
  ValidateSocialLoginMutation,
  ValidateSocialLoginMutationVariables
>;
export const GetReportDocument = gql`
  query getReport($reportUid: String!) {
    report(reportUid: $reportUid) {
      id
      title
      feedbackLink
      createdAt
      updatedAt
      feedbackResponses {
        id
        rating
        items
        comment
      }
    }
  }
`;

/**
 * __useGetReportQuery__
 *
 * To run a query within a React component, call `useGetReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportQuery({
 *   variables: {
 *      reportUid: // value for 'reportUid'
 *   },
 * });
 */
export function useGetReportQuery(
  baseOptions: Apollo.QueryHookOptions<GetReportQuery, GetReportQueryVariables>,
) {
  return Apollo.useQuery<GetReportQuery, GetReportQueryVariables>(
    GetReportDocument,
    baseOptions,
  );
}
export function useGetReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetReportQuery, GetReportQueryVariables>,
) {
  return Apollo.useLazyQuery<GetReportQuery, GetReportQueryVariables>(
    GetReportDocument,
    baseOptions,
  );
}
export type GetReportQueryHookResult = ReturnType<typeof useGetReportQuery>;
export type GetReportLazyQueryHookResult = ReturnType<typeof useGetReportLazyQuery>;
export type GetReportQueryResult = Apollo.QueryResult<
  GetReportQuery,
  GetReportQueryVariables
>;
export const GenerateLinkDocument = gql`
  mutation generateLink($data: GenerateLink!) {
    generateLink(data: $data) {
      success
      message
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
export const SaveFeedbackDocument = gql`
  mutation saveFeedback($data: SaveFeedback!) {
    saveFeedback(data: $data) {
      success
      message
    }
  }
`;
export type SaveFeedbackMutationFn = Apollo.MutationFunction<
  SaveFeedbackMutation,
  SaveFeedbackMutationVariables
>;

/**
 * __useSaveFeedbackMutation__
 *
 * To run a mutation, you first call `useSaveFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFeedbackMutation, { data, loading, error }] = useSaveFeedbackMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveFeedbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SaveFeedbackMutation,
    SaveFeedbackMutationVariables
  >,
) {
  return Apollo.useMutation<SaveFeedbackMutation, SaveFeedbackMutationVariables>(
    SaveFeedbackDocument,
    baseOptions,
  );
}
export type SaveFeedbackMutationHookResult = ReturnType<typeof useSaveFeedbackMutation>;
export type SaveFeedbackMutationResult = Apollo.MutationResult<SaveFeedbackMutation>;
export type SaveFeedbackMutationOptions = Apollo.BaseMutationOptions<
  SaveFeedbackMutation,
  SaveFeedbackMutationVariables
>;
