import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Club, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly events?: (EventClub | null)[] | null;
  readonly organizer?: (ClubUser | null)[] | null;
  readonly type: string;
  readonly managerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Club, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly events: AsyncCollection<EventClub>;
  readonly organizer: AsyncCollection<ClubUser>;
  readonly type: string;
  readonly managerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Club = LazyLoading extends LazyLoadingDisabled ? EagerClub : LazyClub

export declare const Club: (new (init: ModelInit<Club>) => Club) & {
  copyOf(source: Club, mutator: (draft: MutableModel<Club>) => MutableModel<Club> | void): Club;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly startAt: string;
  readonly endAt?: string | null;
  readonly hosts?: (User | null)[] | null;
  readonly belongTo?: (EventClub | null)[] | null;
  readonly users?: (UserEvent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly startAt: string;
  readonly endAt?: string | null;
  readonly hosts: AsyncCollection<User>;
  readonly belongTo: AsyncCollection<EventClub>;
  readonly users: AsyncCollection<UserEvent>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly avatar?: string | null;
  readonly clubs?: (ClubUser | null)[] | null;
  readonly eventID?: string | null;
  readonly events?: (UserEvent | null)[] | null;
  readonly role: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly avatar?: string | null;
  readonly clubs: AsyncCollection<ClubUser>;
  readonly eventID?: string | null;
  readonly events: AsyncCollection<UserEvent>;
  readonly role: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerEventClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventClub, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clubId?: string | null;
  readonly eventId?: string | null;
  readonly club: Club;
  readonly event: Event;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventClub, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clubId?: string | null;
  readonly eventId?: string | null;
  readonly club: AsyncItem<Club>;
  readonly event: AsyncItem<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventClub = LazyLoading extends LazyLoadingDisabled ? EagerEventClub : LazyEventClub

export declare const EventClub: (new (init: ModelInit<EventClub>) => EventClub) & {
  copyOf(source: EventClub, mutator: (draft: MutableModel<EventClub>) => MutableModel<EventClub> | void): EventClub;
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

type EagerUserEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly userId?: string | null;
  readonly event: Event;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly userId?: string | null;
  readonly event: AsyncItem<Event>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserEvent = LazyLoading extends LazyLoadingDisabled ? EagerUserEvent : LazyUserEvent

export declare const UserEvent: (new (init: ModelInit<UserEvent>) => UserEvent) & {
  copyOf(source: UserEvent, mutator: (draft: MutableModel<UserEvent>) => MutableModel<UserEvent> | void): UserEvent;
}