export const typeDefs = ["type AddPlaceResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddPlace(name: String!, lat: Float!, lng: Float!, address: String!, isFav: Boolean!): AddPlaceResponse!\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  userId: Int!\n  user: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  gender: String\n  # password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  profilePhoto: String\n  fullName: String\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n  fbId: String\n  places: [Place]\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyProfile: GetMyProfileResponse;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  gender: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  profilePhoto: string | null;
  fullName: string | null;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number | null;
  fbId: string | null;
  places: Array<Place> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  userId: number;
  user: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  AddPlace: AddPlaceResponse;
}

export interface AddPlaceMutationArgs {
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
}

export interface AddPlaceResponse {
  ok: boolean;
  error: string | null;
}
