import db from "../config/connection.js";
import { Tech } from '../models/index.js';
import cleanDB from "./cleanDB.js";

import techData from './techData.json' with { type: "json" };

db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
