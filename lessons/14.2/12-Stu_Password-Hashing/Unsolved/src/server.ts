/*
📐 Add Comments to the Implementation of the Login Route
Work with a group to add comments describing the functionality of the /login route code found in Unsolved/src/routes/api/userRoutes.ts.

📝 Notes
Refer to the documentation:

npm Documentation on bcrypt

🏆 Bonus
If you've completed this activity, work through the following challenge with your group to further your knowledge:

How can we persist a login state?
 */

import dotenv from 'dotenv';
dotenv.config();

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
