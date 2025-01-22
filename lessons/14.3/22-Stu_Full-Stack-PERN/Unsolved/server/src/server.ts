/*
 * 🏗️ Populate User Registry with Database Data
 *
 * Work with a partner to implement the following user story:
 * As a user, I want to see a list of the other users who are registered with the app.
 * 
 * Acceptance Criteria
 * It's done when the homepage displays the user data from the database instead of the 
 *  hardcoded values.
 * It's done when the users are sorted alphabetically by name.
 * 
 * Assets
 * The following image demonstrates the web application's appearance and functionality:
 * The homepage displays an alphabetical list of users and their e-mail addresses 
 * beneath the heading, "User Registry."
 * 
 * 💡 Hints
 * Without a sign-up form, how can you quickly add new users to the database?
 * What needs to happen with the Sequelize data before it can be passed into the 
 * client side?
 * 
 * 🏆 Bonus
 * Q: What is the difference between the MERN & PERN stack?
 * A: TODO
 * 
 */

const forceDatabaseRefresh = false;

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
