/*
 * 🏗️ Use Hooks to Hash a Password
 *
 * Work with a group to implement the following user story:
 * As a user, I want to be able to log in with my password.
 * As a user, I want to be able to change my password.
 * As a user, I want to know that my password is being stored securely.
 * 
 * Acceptance Criteria
 * It's done when User.init() includes Hooks and instance methods to hash the user's 
 *  password before it is created.
 * It's done when User.init() includes Hooks and instance methods to hash the user's 
 *  password before it is updated.
 * It's done when the User model includes an instance method to compare a given 
 *  password to the user's password.
 * 
 * 💡 Hints
 * What have you learned about instance methods, hashing a password, async and await, 
 *  and try...catch?
 * What are three methods for adding Hooks to your code? How is adding a Hook via 
 *  init() different from the other options?
 * 
 * 🏆 Bonus 
 * Q: Hooks are considered middleware in programming terms. What are some other 
 *  examples of middleware used in Node applications?
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
