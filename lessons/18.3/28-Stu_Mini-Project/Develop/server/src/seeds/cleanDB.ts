import { Tech, Matchup } from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Tech" | "Matchup", collectionName: string) => {
  try {
    // Ensure the model exists in the models object
    const model = { Tech, Matchup }[modelName];
    if (!model) {
      throw new Error(`Model ${modelName} does not exist.`);
    }

    // Ensure that model.db is defined
    if (!model.db || !model.db.db) {
      throw new Error(`Database connection for model ${modelName} is not defined.`);
    }

    let modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
