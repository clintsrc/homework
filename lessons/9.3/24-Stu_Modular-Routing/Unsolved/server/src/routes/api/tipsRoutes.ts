import express from 'express';
import TipService from '../../service/TipService.js';
const router = express.Router();


// FIX: since the middleware in the index is loading this GET route to 
//  path /tips, the route path needs to be / not /tips

// This API route is a GET Route for retrieving all the tips
router.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  TipService.getTips().then((data) => res.json(data));
});


// FIX: since the middleware in the index is loading this POST route to 
//  path /tips, the route path needs to be / not /tips

// This API route is a POST Route for a new UX/UI tip
router.post('/', async (req, res) => {
  const { username, topic, tip } = req.body;
  if (req.body) {
    await TipService.addTip(username, topic, tip);
    res.json(`Tip added successfully`);
  } else {
    res.send('Error in adding tip');
  }
});
export default router;
