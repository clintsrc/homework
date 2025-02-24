import { Thought } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    // Delete documents from School collection
    await Thought.deleteMany({});
    console.log('Tought collection cleaned.');

  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
