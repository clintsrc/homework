import db from '../connection.js';
import { Thought, User } from '../models/index.js';
import cleanDB from './cleanDB.js';

import userData from './userData.json' assert { type: 'json'};
import thoughtData from './thoughtData.json' assert { type: 'json' };


try {
  await db();
  await cleanDB();

  console.log(userData)
  // bulk create each model
  await Thought.insertMany(thoughtData);

  await User.create(userData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
