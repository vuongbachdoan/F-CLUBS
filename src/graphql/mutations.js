/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      place
      description
      banner
      thumbnail
      status
      participants
      ownerClub
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
      startDate
      endDate
      place
      description
      banner
      thumbnail
      status
      participants
      ownerClub
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
      startDate
      endDate
      place
      description
      banner
      thumbnail
      status
      participants
      ownerClub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      name
      thumbnal
      testingClubs
      pendingEvents
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      name
      thumbnal
      testingClubs
      pendingEvents
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      name
      thumbnal
      testingClubs
      pendingEvents
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClub = /* GraphQL */ `
  mutation CreateClub(
    $input: CreateClubInput!
    $condition: ModelClubConditionInput
  ) {
    createClub(input: $input, condition: $condition) {
      id
      name
      introdution
      type
      members {
        nextToken
        startedAt
      }
      events {
        nextToken
        startedAt
      }
      thumbnail
      email
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
      introdution
      type
      members {
        nextToken
        startedAt
      }
      events {
        nextToken
        startedAt
      }
      thumbnail
      email
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
      introdution
      type
      members {
        nextToken
        startedAt
      }
      events {
        nextToken
        startedAt
      }
      thumbnail
      email
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
      name
      thumbnail
      clubs {
        nextToken
        startedAt
      }
      joinedEvents {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      thumbnail
      clubs {
        nextToken
        startedAt
      }
      joinedEvents {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      thumbnail
      clubs {
        nextToken
        startedAt
      }
      joinedEvents {
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
        introdution
        type
        thumbnail
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        thumbnail
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
        introdution
        type
        thumbnail
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        thumbnail
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
        introdution
        type
        thumbnail
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        thumbnail
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
