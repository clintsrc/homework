/*
 * 🏗️ Implement the PUT and DELETE Route Methods
 *
 * Work with a group to implement the following user story:
 * As a bookstore owner, I want to be able to update and remove certain books of my 
 * choice from the inventory.
 * 
 * Acceptance Criteria
 * It's done when a book can be updated by ID.
 * It's done when a book can be deleted by ID.
 * 
 * 📝 Notes
 * Refer to the documentation:
 * 
 * Sequelize Documentation on Model Querying Basics
 * 
 * 🏆 Bonus
 * Q: Which SQL operators does Sequelize support?
 * A: TODO
 * 
 */

const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
