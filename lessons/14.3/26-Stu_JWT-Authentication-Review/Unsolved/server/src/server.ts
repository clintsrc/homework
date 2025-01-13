/*
🐛 Implement Jwt-decode to Decode Token and Access User Information
Work with a partner to resolve the following issue:

As a user, I want to log in to the application and remain logged in.
Acceptance Criteria
It's done when the JWT is stored in localStorage.

It's done when the JWT can be decoded and the token's validity can be verified.

It's done when the JWT can be decoded to access the user information stored in the token.

It's done when the user information stored in the JWT can be accessed in a React component.

📝 Notes
Refer to the documentation:

jwt-decode Package Documentation
💡 Hints
Where do we store all of our client-side authentication functionality?

Which unit of time measurement does the JWT use compared to JavaScript?

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What are some alternatives to using JWTs?
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
