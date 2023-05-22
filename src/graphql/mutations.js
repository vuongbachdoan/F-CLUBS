/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClub = /* GraphQL */ `
  mutation CreateClub(
    $input: CreateClubInput!
    $condition: ModelClubConditionInput
  ) {
    createClub(input: $input, condition: $condition) {
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
export const updateClub = /* GraphQL */ `
  mutation UpdateClub(
    $input: UpdateClubInput!
    $condition: ModelClubConditionInput
  ) {
    updateClub(input: $input, condition: $condition) {
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
export const deleteClub = /* GraphQL */ `
  mutation DeleteClub(
    $input: DeleteClubInput!
    $condition: ModelClubConditionInput
  ) {
    deleteClub(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEventClub = /* GraphQL */ `
  mutation CreateEventClub(
    $input: CreateEventClubInput!
    $condition: ModelEventClubConditionInput
  ) {
    createEventClub(input: $input, condition: $condition) {
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
export const updateEventClub = /* GraphQL */ `
  mutation UpdateEventClub(
    $input: UpdateEventClubInput!
    $condition: ModelEventClubConditionInput
  ) {
    updateEventClub(input: $input, condition: $condition) {
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
export const deleteEventClub = /* GraphQL */ `
  mutation DeleteEventClub(
    $input: DeleteEventClubInput!
    $condition: ModelEventClubConditionInput
  ) {
    deleteEventClub(input: $input, condition: $condition) {
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
export const createClubUser = /* GraphQL */ `
  mutation CreateClubUser(
    $input: CreateClubUserInput!
    $condition: ModelClubUserConditionInput
  ) {
    createClubUser(input: $input, condition: $condition) {
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
export const updateClubUser = /* GraphQL */ `
  mutation UpdateClubUser(
    $input: UpdateClubUserInput!
    $condition: ModelClubUserConditionInput
  ) {
    updateClubUser(input: $input, condition: $condition) {
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
export const deleteClubUser = /* GraphQL */ `
  mutation DeleteClubUser(
    $input: DeleteClubUserInput!
    $condition: ModelClubUserConditionInput
  ) {
    deleteClubUser(input: $input, condition: $condition) {
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
export const createUserEvent = /* GraphQL */ `
  mutation CreateUserEvent(
    $input: CreateUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    createUserEvent(input: $input, condition: $condition) {
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
export const updateUserEvent = /* GraphQL */ `
  mutation UpdateUserEvent(
    $input: UpdateUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    updateUserEvent(input: $input, condition: $condition) {
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
export const deleteUserEvent = /* GraphQL */ `
  mutation DeleteUserEvent(
    $input: DeleteUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    deleteUserEvent(input: $input, condition: $condition) {
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
