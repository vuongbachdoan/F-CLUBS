/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClub = /* GraphQL */ `
  subscription OnCreateClub($filter: ModelSubscriptionClubFilterInput) {
    onCreateClub(filter: $filter) {
      id
      name
      description
      thumbnail
      events {
        nextToken
        startedAt
      }
      organizer {
        nextToken
        startedAt
      }
      type
      managerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub($filter: ModelSubscriptionClubFilterInput) {
    onUpdateClub(filter: $filter) {
      id
      name
      description
      thumbnail
      events {
        nextToken
        startedAt
      }
      organizer {
        nextToken
        startedAt
      }
      type
      managerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub($filter: ModelSubscriptionClubFilterInput) {
    onDeleteClub(filter: $filter) {
      id
      name
      description
      thumbnail
      events {
        nextToken
        startedAt
      }
      organizer {
        nextToken
        startedAt
      }
      type
      managerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      name
      description
      thumbnail
      startAt
      endAt
      hosts {
        nextToken
        startedAt
      }
      belongTo {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
      id
      name
      description
      thumbnail
      startAt
      endAt
      hosts {
        nextToken
        startedAt
      }
      belongTo {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
      id
      name
      description
      thumbnail
      startAt
      endAt
      hosts {
        nextToken
        startedAt
      }
      belongTo {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      email
      password
      avatar
      clubs {
        nextToken
        startedAt
      }
      eventID
      events {
        nextToken
        startedAt
      }
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      email
      password
      avatar
      clubs {
        nextToken
        startedAt
      }
      eventID
      events {
        nextToken
        startedAt
      }
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      email
      password
      avatar
      clubs {
        nextToken
        startedAt
      }
      eventID
      events {
        nextToken
        startedAt
      }
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEventClub = /* GraphQL */ `
  subscription OnCreateEventClub(
    $filter: ModelSubscriptionEventClubFilterInput
  ) {
    onCreateEventClub(filter: $filter) {
      id
      clubId
      eventId
      club {
        id
        name
        description
        thumbnail
        type
        managerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      event {
        id
        name
        description
        thumbnail
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEventClub = /* GraphQL */ `
  subscription OnUpdateEventClub(
    $filter: ModelSubscriptionEventClubFilterInput
  ) {
    onUpdateEventClub(filter: $filter) {
      id
      clubId
      eventId
      club {
        id
        name
        description
        thumbnail
        type
        managerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      event {
        id
        name
        description
        thumbnail
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEventClub = /* GraphQL */ `
  subscription OnDeleteEventClub(
    $filter: ModelSubscriptionEventClubFilterInput
  ) {
    onDeleteEventClub(filter: $filter) {
      id
      clubId
      eventId
      club {
        id
        name
        description
        thumbnail
        type
        managerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      event {
        id
        name
        description
        thumbnail
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateClubUser = /* GraphQL */ `
  subscription OnCreateClubUser($filter: ModelSubscriptionClubUserFilterInput) {
    onCreateClubUser(filter: $filter) {
      id
      clubId
      userId
      club {
        id
        name
        description
        thumbnail
        type
        managerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        email
        password
        avatar
        eventID
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateClubUser = /* GraphQL */ `
  subscription OnUpdateClubUser($filter: ModelSubscriptionClubUserFilterInput) {
    onUpdateClubUser(filter: $filter) {
      id
      clubId
      userId
      club {
        id
        name
        description
        thumbnail
        type
        managerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        email
        password
        avatar
        eventID
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteClubUser = /* GraphQL */ `
  subscription OnDeleteClubUser($filter: ModelSubscriptionClubUserFilterInput) {
    onDeleteClubUser(filter: $filter) {
      id
      clubId
      userId
      club {
        id
        name
        description
        thumbnail
        type
        managerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        email
        password
        avatar
        eventID
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserEvent = /* GraphQL */ `
  subscription OnCreateUserEvent(
    $filter: ModelSubscriptionUserEventFilterInput
  ) {
    onCreateUserEvent(filter: $filter) {
      id
      eventId
      userId
      event {
        id
        name
        description
        thumbnail
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        email
        password
        avatar
        eventID
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserEvent = /* GraphQL */ `
  subscription OnUpdateUserEvent(
    $filter: ModelSubscriptionUserEventFilterInput
  ) {
    onUpdateUserEvent(filter: $filter) {
      id
      eventId
      userId
      event {
        id
        name
        description
        thumbnail
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        email
        password
        avatar
        eventID
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserEvent = /* GraphQL */ `
  subscription OnDeleteUserEvent(
    $filter: ModelSubscriptionUserEventFilterInput
  ) {
    onDeleteUserEvent(filter: $filter) {
      id
      eventId
      userId
      event {
        id
        name
        description
        thumbnail
        startAt
        endAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        email
        password
        avatar
        eventID
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
