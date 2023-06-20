// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Admin, Club, User, ClubUser } = initSchema(schema);

export {
  Event,
  Admin,
  Club,
  User,
  ClubUser
};