/*
📖 Implement JWT Signing for Authentication
Work with a partner to implement the following user story:

As a business owner, I want my website to include session information, so that users cannot stay logged in forever.
Acceptance Criteria
It's done when a user logs in and a JWT is created.

It's done when the JWT is returned to the client for decoding.

📝 Notes
Refer to the documentation:

JSON Web Tokens

jsonwebtoken Node.js Package

💡 Hints
Where should the login route live?

Where do we create our JWT secret key?

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What are the pros and cons of using JWTs?
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
