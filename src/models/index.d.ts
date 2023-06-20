import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly place?: string | null;
  readonly description?: string | null;
  readonly banner?: string | null;
  readonly thumbnail?: string | null;
  readonly status?: string | null;
  readonly participants: string;
  readonly ownerClub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly place?: string | null;
  readonly description?: string | null;
  readonly banner?: string | null;
  readonly thumbnail?: string | null;
  readonly status?: string | null;
  readonly participants: string;
  readonly ownerClub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly thumbnal?: string | null;
  readonly testingClubs?: (string | null)[] | null;
  readonly pendingEvents?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly thumbnal?: string | null;
  readonly testingClubs?: (string | null)[] | null;
  readonly pendingEvents?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

type EagerClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Club, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly introdution?: string | null;
  readonly type?: string | null;
  readonly members?: (ClubUser | null)[] | null;
  readonly events?: (Event | null)[] | null;
  readonly thumbnail?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Club, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly introdution?: string | null;
  readonly type?: string | null;
  readonly members: AsyncCollection<ClubUser>;
  readonly events: AsyncCollection<Event>;
  readonly thumbnail?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Club = LazyLoading extends LazyLoadingDisabled ? EagerClub : LazyClub

export declare const Club: (new (init: ModelInit<Club>) => Club) & {
  copyOf(source: Club, mutator: (draft: MutableModel<Club>) => MutableModel<Club> | void): Club;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly thumbnail?: string | null;
  readonly clubs?: (ClubUser | null)[] | null;
  readonly joinedEvents?: (Event | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly thumbnail?: string | null;
  readonly clubs: AsyncCollection<ClubUser>;
  readonly joinedEvents: AsyncCollection<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerClubUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClubUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clubId?: string | null;
  readonly userId?: string | null;
  readonly club: Club;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClubUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClubUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clubId?: string | null;
  readonly userId?: string | null;
  readonly club: AsyncItem<Club>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClubUser = LazyLoading extends LazyLoadingDisabled ? EagerClubUser : LazyClubUser

export declare const ClubUser: (new (init: ModelInit<ClubUser>) => ClubUser) & {
  copyOf(source: ClubUser, mutator: (draft: MutableModel<ClubUser>) => MutableModel<ClubUser> | void): ClubUser;
}