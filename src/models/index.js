// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Club, Event, User, EventClub, ClubUser, UserEvent } = initSchema(schema);

export {
  Club,
  Event,
  User,
  EventClub,
  ClubUser,
  UserEvent
};