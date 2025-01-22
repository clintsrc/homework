/*
 * 📐 Add Comments to Implementation of a One-to-One Association
 *
 * Work with a group to add comments describing the functionality of the code found in 
 *  the following files:
 * Unsolved/models/index.ts
 * Unsolved/models/LibraryCard.ts
 * Unsolved/routes/api/readerRoutes.ts
 * Unsolved/routes/api/libraryCardRoutes.ts
 * 
 * 📝 Notes
 * Refer to the documentation:
 * Sequelize Documentation on Associations
 * 
 * 🏆 Bonus
 * Q: What is an entity relationship diagram (ERD)?
 * A: TODO
 * 
 */

import express from 'express';
import sequelize from './config/connection.js';

import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
