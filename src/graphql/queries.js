/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClub = /* GraphQL */ `
  query GetClub($id: ID!) {
    getClub(id: $id) {
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
export const listClubs = /* GraphQL */ `
  query ListClubs(
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncClubs = /* GraphQL */ `
  query SyncClubs(
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClubs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const clubsByManagerID = /* GraphQL */ `
  query ClubsByManagerID(
    $managerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clubsByManagerID(
      managerID: $managerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const usersByEventID = /* GraphQL */ `
  query UsersByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEventClub = /* GraphQL */ `
  query GetEventClub($id: ID!) {
    getEventClub(id: $id) {
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
export const listEventClubs = /* GraphQL */ `
  query ListEventClubs(
    $filter: ModelEventClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clubId
        eventId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventClubs = /* GraphQL */ `
  query SyncEventClubs(
    $filter: ModelEventClubFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventClubs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        clubId
        eventId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const eventClubsByClubId = /* GraphQL */ `
  query EventClubsByClubId(
    $clubId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventClubsByClubId(
      clubId: $clubId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clubId
        eventId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const eventClubsByEventId = /* GraphQL */ `
  query EventClubsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventClubsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clubId
        eventId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClubUser = /* GraphQL */ `
  query GetClubUser($id: ID!) {
    getClubUser(id: $id) {
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
export const listClubUsers = /* GraphQL */ `
  query ListClubUsers(
    $filter: ModelClubUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clubId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClubUsers = /* GraphQL */ `
  query SyncClubUsers(
    $filter: ModelClubUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClubUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        clubId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const clubUsersByClubId = /* GraphQL */ `
  query ClubUsersByClubId(
    $clubId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClubUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clubUsersByClubId(
      clubId: $clubId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clubId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const clubUsersByUserId = /* GraphQL */ `
  query ClubUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClubUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clubUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clubId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserEvent = /* GraphQL */ `
  query GetUserEvent($id: ID!) {
    getUserEvent(id: $id) {
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
export const listUserEvents = /* GraphQL */ `
  query ListUserEvents(
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserEvents = /* GraphQL */ `
  query SyncUserEvents(
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userEventsByEventId = /* GraphQL */ `
  query UserEventsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userEventsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userEventsByUserId = /* GraphQL */ `
  query UserEventsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userEventsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
