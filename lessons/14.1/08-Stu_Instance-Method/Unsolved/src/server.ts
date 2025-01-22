/*
 * 🏗️ Create a Custom Instance Method
 *
 * Work with a group to implement the following user story:
 * As a user, I want the application to display my full name, so that the application 
 * is more personal and professional.
 * 
 * Acceptance Criteria
 * It's done when the model includes an instance method.
 * It's done when the instance method combines the values of the firstname and lastname 
 *  of a user.
 * 
 * 🏆 Bonus
 * Q: How can we DRY up the code using Sequelize's static model methods?
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
