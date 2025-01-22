/*
 * 🐛 PostgreSQL Table Isn't Being Created to Specifications
 *
 * Work with a group to resolve the following issues:
 * As a developer, I want a PostgreSQL table with the same name as the Sequelize model.
 * As a developer, I don't want to include the created_at and updated_at columns in 
 *  the PostgreSQL table.
 * 
 * Expected Behavior
 * When Sequelize syncs the model with the database, the table name should be book 
 * (singular) and the created_at and updated_at columns shouldn't be in the book table.
 * 
 * Actual Behavior
 * The table is named Book and contains the created_at and updated_at columns.
 * 
 * Steps to Reproduce the Problem
 * Run npm run build then npm start from the command line to start the server and sync 
 *  the database.
 * Run psql -U postgres to log in to the PostgreSQL shell.
 * In the PostgreSQL shell, run \c library_db; to switch to the library database.
 * Try to run \d book; to describe the book table. It will fail because the table name 
 *  is Book.
 * Run \d Book;. Note that the table contains the created_at and updated_at columns.
 * 
 * 💡 Hints
 * What options does Sequelize provide when it comes to naming tables and fields?
 * 
 * 🏆 Bonus
 * Q: How can you globally define table-naming rules for your Sequelize connection?
 * A: TODO
 * 
 */

import express from 'express';
import sequelize from './connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
