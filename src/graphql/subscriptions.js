/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
export const onCreateClub = /* GraphQL */ `
  subscription OnCreateClub($filter: ModelSubscriptionClubFilterInput) {
    onCreateClub(filter: $filter) {
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
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub($filter: ModelSubscriptionClubFilterInput) {
    onUpdateClub(filter: $filter) {
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
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub($filter: ModelSubscriptionClubFilterInput) {
    onDeleteClub(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateClubUser = /* GraphQL */ `
  subscription OnCreateClubUser($filter: ModelSubscriptionClubUserFilterInput) {
    onCreateClubUser(filter: $filter) {
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
export const onUpdateClubUser = /* GraphQL */ `
  subscription OnUpdateClubUser($filter: ModelSubscriptionClubUserFilterInput) {
    onUpdateClubUser(filter: $filter) {
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
export const onDeleteClubUser = /* GraphQL */ `
  subscription OnDeleteClubUser($filter: ModelSubscriptionClubUserFilterInput) {
    onDeleteClubUser(filter: $filter) {
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
