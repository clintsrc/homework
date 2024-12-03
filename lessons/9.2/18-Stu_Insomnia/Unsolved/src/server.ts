 /*
  *

  🐛 PUT and DELETE Requests Not Working
  Work with a partner to resolve the following issue(s):
  As a user, I want to be able to update and delete data using PUT and DELETE routes.

  Expected Behavior
  When the user makes a request to the PUT or DELETE route, data should be updated or deleted respectively.

  Actual Behavior
  When a user makes a request to the PUT or DELETE route, the data is not updated or deleted.

  Steps to Reproduce the Problem
  Start the server by running npm start.
  Open Insomnia and make a PUT request.
  Make a GET request and see that the PUT request hasn't altered the data.
  Make a DELETE request.
  Make a GET request and see that the DELETE request hasn't deleted the data.

  💡 Hints
  How would you access route parameters?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What other HTTP methods are there? When would they be used?
  A: TODO

  *
  */

import express from 'express';

// Import the JSON data
import { readFileSync } from 'fs';
const guestData = JSON.parse(readFileSync('src/guests.json', 'utf8'));

// interface that defines the shape of the guest object
interface Guest {
  id: number;
  guestName: string;
  email: string;
  homeAddress: string;
}

// Variable to keep track of the next ID to be assigned
let nextId = guestData.length + 1;

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and URLencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route to get all of the guests
app.get('/api/guests', (_req, res) => res.json(guestData));

// GET route that returns any specific guest based on the ID provided
app.get('/api/guests/:id', (req, res) => {
  const requestedId: string = req.params.id;

  // Iterate through the guests name to check if it matches `req.params.id
  for (let i = 0; i < guestData.length; i++) {
    if (requestedId === guestData[i].id.toString()) {
      return res.json(guestData[i]);
    }
  }

  // Return a message if the guest doesn't exist in our DB
  return res.json('No match found');
});

// POST route to add a new guest to the guestData array
app.post('/api/guests', (req, res) => {
  const newGuest: Guest = {
    id: nextId,
    guestName: req.body.guestName,
    email: req.body.email,
    homeAddress: req.body.homeAddress,
  };
  guestData.push(newGuest);
  nextId++;
  res.json(newGuest);
});

// PUT route to update a guest based on the ID provided
app.put('/api/guests/:id', (req, res) => {
  const requestedId = req.query.id;

  // Update the guest if it exists
  for (let i = 0; i < guestData.length; i++) {
    if (requestedId === guestData[i].id.toString()) {
      const updatedGuest: Guest = {
        id: guestData[i].id,
        guestName: req.body.guestName,
        email: req.body.email,
        homeAddress: req.body.homeAddress,
      };
      guestData[i] = updatedGuest;
      return res.json(guestData[i]);
    }
  }

  // Return a message if the guest doesn't exist in our DB
  return res.json('No match found');
});

// DELETE route to delete a guest based on the ID provided
app.delete('/api/guests/:id', (req, res) => {
  const requestedId = req.query.id;

  for (let i = 0; i < guestData.length; i++) {
    if (requestedId === guestData[i].id.toString()) {
      guestData.splice(i, 1);
      return res.json('guest deleted');
    }
  }

  // Return a message if the guest doesn't exist in our DB
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (_req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/guests">http://localhost:${PORT}/api/guests</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
