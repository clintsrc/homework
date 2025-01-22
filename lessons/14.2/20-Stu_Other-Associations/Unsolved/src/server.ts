/*
 * 🏗️ Implement One-to-Many and Many-to-Many Association Between Models
 *
 * Work with a group to implement the following user story:
 * As a library manager, I want to see the books in the library, their authors, and the 
 * readers who have those books checked out.
 * 
 * Acceptance Criteria
 * It's done when the PostgreSQL table for book data has a foreign key referencing the 
 *  Author table.
 * It's done when the Reader table uses a junction model to establish a many-to-many 
 *  relationship with the Book table.
 * It's done when the response of a GET request to /api/authors or /api/authors/:id 
 *  includes the books written by that author.
 * It's done when the response of a GET request to /api/readers includes the books 
 *  checked out by a reader.
 * It's done when the response of a GET request to /api/books includes the readers who 
 *  have the books checked out.
 * 
 * 📝 Notes
 * Refer to the documentation:
 * Sequelize Associations
 * TypeScript and Sequelize v6
 * 
 * 💡 Hints
 * When you associate these models, what will the relationship look like? Would authors 
 *  belong to books, or would books belong to authors?
 * When establishing a many-to-many relationship, does it matter which model 
 *  establishes the relationship?
 * 
 * 🏆 Bonus
 * Q: As a TypeScript developer using Sequelize, why do you still need to know SQL?
 * A: TODO
 * 
 * Q: What are Sequelize Literals?
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
