/*
 * 🏗️ Implement Connecting to a Database using Sequelize

 * Work with a group to implement the following user story: 
 * As a user, I want the application to connect to a database, so that I can use my data in the application.
 * 
 * Acceptance Criteria
 * It's done when the application connects to the database securely. 
 * It's done when the database name, user, and password are read from environment 
 * variables.
 * 
 * 📝 Notes
 * Refer to the documentation:
 * Sequelize Documentation on Getting Started
 * 
 * 💡 Hints
 * How does the dotenv npm package use .env files?
 * 
 * 🏆 Bonus
 * Q: How can you set environment variables from the command line?
 * A: TODO
 * 
 */

import express from 'express';

// TODO: Import the Sequelize connection object

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Connect to the database before starting the Express.js server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
