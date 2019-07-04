export const typeDefs = ["type User {\n  id: ID!\n  username: String!\n  email: String!\n  bio: String\n  following: [User!]!\n  followers: [User!]!\n  posts: [Post!]!\n  likes: [Like!]!\n  comments: [Comment!]!\n  rooms: [Room!]!\n  loginSecret: String\n}\n\ntype Post {\n  id: ID!\n  location: String\n  caption: String!\n  user: User!\n  files: [File!]!\n  likes: [Like!]!\n  comments: [Comment!]!\n}\n\ntype Like {\n  id: ID!\n  user: User!\n  post: Post!\n}\n\ntype Comment {\n  id: ID!\n  text: String!\n  user: User!\n  post: Post!\n}\n\ntype File {\n  id: ID!\n  url: String!\n  post: Post!\n}\n\ntype Room {\n  id: ID!\n  participants: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  from: User!\n  to: User!\n  room: Room!\n}\n\ntype ToggleLikeResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  toggleLike(postId: String!): ToggleLikeResponse!\n  confirmSecret(secret: String!, email: String!): ConfirmSecretResponse!\n  createAccount(username: String!, email: String!, bio: String): CreateAccountResponse!\n  requestSecret(email: String, phoneNumber: String): Boolean!\n}\n\ntype ConfirmSecretResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype CreateAccountResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Query {\n  something: String!\n}\n"];
/* tslint:disable */

export interface Query {
  something: string;
}

export interface Mutation {
  toggleLike: ToggleLikeResponse;
  confirmSecret: ConfirmSecretResponse;
  createAccount: CreateAccountResponse;
  requestSecret: boolean;
}

export interface ToggleLikeMutationArgs {
  postId: string;
}

export interface ConfirmSecretMutationArgs {
  secret: string;
  email: string;
}

export interface CreateAccountMutationArgs {
  username: string;
  email: string;
  bio: string | null;
}

export interface RequestSecretMutationArgs {
  email: string | null;
  phoneNumber: string | null;
}

export interface ToggleLikeResponse {
  ok: boolean;
  error: string | null;
}

export interface ConfirmSecretResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface CreateAccountResponse {
  ok: boolean;
  error: string | null;
}

export interface User {
  id: string;
  username: string;
  email: string;
  bio: string | null;
  following: Array<User>;
  followers: Array<User>;
  posts: Array<Post>;
  likes: Array<Like>;
  comments: Array<Comment>;
  rooms: Array<Room>;
  loginSecret: string | null;
}

export interface Post {
  id: string;
  location: string | null;
  caption: string;
  user: User;
  files: Array<File>;
  likes: Array<Like>;
  comments: Array<Comment>;
}

export interface File {
  id: string;
  url: string;
  post: Post;
}

export interface Like {
  id: string;
  user: User;
  post: Post;
}

export interface Comment {
  id: string;
  text: string;
  user: User;
  post: Post;
}

export interface Room {
  id: string;
  participants: Array<User>;
  messages: Array<Message>;
}

export interface Message {
  id: string;
  text: string;
  from: User;
  to: User;
  room: Room;
}
