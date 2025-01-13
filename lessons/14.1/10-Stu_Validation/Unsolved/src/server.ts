/*
📖 Add Validations and Constraints to the User Model
Work with a group to implement the following user story:

As a developer, I want to add validations and constraints to the User model to prevent bad data from being saved in the database.
Acceptance Criteria
It's done when the User model prevents null values from being entered for the username, email, and password fields.

It's done when the User model prevents the password from being shorter than eight characters.

It's done when the User model prevents the username from having any characters other than letters and numbers.

📝 Notes
Refer to the documentation:

Sequelize Documentation on Validations and Constraints

💡 Hints
Which built-in validators can you use?
🏆 Bonus
If you've completed this activity, work through the following challenge with your group to further your knowledge:

What are regular expressions?
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
