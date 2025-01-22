/*
 * 🐛 Fix Non-functional REST API Routes

 * Work with a partner to resolve the following issue(s):
 * Users should be able to perform CRUD operations on items via the REST API.
 * 
 * Expected Behavior
 * When a user sends a request to the REST API, the appropriate response should be 
 * returned, allowing for Create, Read, Update, and Delete operations on items.
 * 
 * Actual Behavior
 * The REST API routes don't function correctly, resulting in errors or a lack of a 
 * response when requests are sent.
 * 
 * 💡 Hints
 * Have you checked whether the routes are correctly defined in your Express 
 * application?
 * 
 * 🏆 Bonus
 * Q: What are some other paradigms besides Client-Server?
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
