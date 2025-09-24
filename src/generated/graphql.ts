import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AdminData = {
  __typename?: 'AdminData';
  secretStats: Scalars['String']['output'];
  systemLogs: Array<Scalars['String']['output']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
  markNotificationAsRead: Notification;
  signup?: Maybe<AuthPayload>;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminData: AdminData;
  me?: Maybe<User>;
  myNotifications: Array<Notification>;
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: { __typename?: 'AuthPayload'; token: string } | null;
};

export type MarkNotificationAsReadMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type MarkNotificationAsReadMutation = {
  __typename?: 'Mutation';
  markNotificationAsRead: {
    __typename?: 'Notification';
    id: string;
    message: string;
    read: boolean;
    createdAt: string;
  };
};

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup?: { __typename?: 'AuthPayload'; token: string } | null;
};

export type AdminDataQueryVariables = Exact<{ [key: string]: never }>;

export type AdminDataQuery = {
  __typename?: 'Query';
  adminData: {
    __typename?: 'AdminData';
    systemLogs: Array<string>;
    secretStats: string;
  };
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: 'Query';
  me?: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;
};

export type MyNotificationsQueryVariables = Exact<{ [key: string]: never }>;

export type MyNotificationsQuery = {
  __typename?: 'Query';
  myNotifications: Array<{
    __typename?: 'Notification';
    id: string;
    message: string;
    read: boolean;
    createdAt: string;
  }>;
};

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const MarkNotificationAsReadDocument = gql`
  mutation MarkNotificationAsRead($id: ID!) {
    markNotificationAsRead(id: $id) {
      id
      message
      read
      createdAt
    }
  }
`;
export type MarkNotificationAsReadMutationFn = Apollo.MutationFunction<
  MarkNotificationAsReadMutation,
  MarkNotificationAsReadMutationVariables
>;
export function useMarkNotificationAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkNotificationAsReadMutation,
    MarkNotificationAsReadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkNotificationAsReadMutation,
    MarkNotificationAsReadMutationVariables
  >(MarkNotificationAsReadDocument, options);
}
export type MarkNotificationAsReadMutationHookResult = ReturnType<
  typeof useMarkNotificationAsReadMutation
>;
export type MarkNotificationAsReadMutationResult =
  Apollo.MutationResult<MarkNotificationAsReadMutation>;
export type MarkNotificationAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkNotificationAsReadMutation,
  MarkNotificationAsReadMutationVariables
>;
export const SignupDocument = gql`
  mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(input: { email: $email, password: $password, name: $name }) {
      token
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options,
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const AdminDataDocument = gql`
  query AdminData {
    adminData {
      systemLogs
      secretStats
    }
  }
`;
export function useAdminDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminDataQuery,
    AdminDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AdminDataQuery, AdminDataQueryVariables>(
    AdminDataDocument,
    options,
  );
}
export function useAdminDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminDataQuery,
    AdminDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AdminDataQuery, AdminDataQueryVariables>(
    AdminDataDocument,
    options,
  );
}
export function useAdminDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<AdminDataQuery, AdminDataQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AdminDataQuery, AdminDataQueryVariables>(
    AdminDataDocument,
    options,
  );
}
export type AdminDataQueryHookResult = ReturnType<typeof useAdminDataQuery>;
export type AdminDataLazyQueryHookResult = ReturnType<
  typeof useAdminDataLazyQuery
>;
export type AdminDataSuspenseQueryHookResult = ReturnType<
  typeof useAdminDataSuspenseQuery
>;
export type AdminDataQueryResult = Apollo.QueryResult<
  AdminDataQuery,
  AdminDataQueryVariables
>;
export const GetMeDocument = gql`
  query GetMe {
    me {
      id
      name
      email
      role
    }
  }
`;
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  );
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  );
}
export function useGetMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<
  typeof useGetMeSuspenseQuery
>;
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>;
export const MyNotificationsDocument = gql`
  query MyNotifications {
    myNotifications {
      id
      message
      read
      createdAt
    }
  }
`;
export function useMyNotificationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyNotificationsQuery,
    MyNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyNotificationsQuery, MyNotificationsQueryVariables>(
    MyNotificationsDocument,
    options,
  );
}
export function useMyNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyNotificationsQuery,
    MyNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MyNotificationsQuery,
    MyNotificationsQueryVariables
  >(MyNotificationsDocument, options);
}
export function useMyNotificationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MyNotificationsQuery,
        MyNotificationsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MyNotificationsQuery,
    MyNotificationsQueryVariables
  >(MyNotificationsDocument, options);
}
export type MyNotificationsQueryHookResult = ReturnType<
  typeof useMyNotificationsQuery
>;
export type MyNotificationsLazyQueryHookResult = ReturnType<
  typeof useMyNotificationsLazyQuery
>;
export type MyNotificationsSuspenseQueryHookResult = ReturnType<
  typeof useMyNotificationsSuspenseQuery
>;
export type MyNotificationsQueryResult = Apollo.QueryResult<
  MyNotificationsQuery,
  MyNotificationsQueryVariables
>;
