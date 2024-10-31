import express from 'express';
import FeedbackService from '../../service/FeedbackService.js';
const router = express.Router();
// This API route is a GET Route for retrieving all the feedback
router.get('/', (_req, res) => {
  FeedbackService.getFeedback().then((data) => res.json(data));
});

// This API route is a POST Route for a new piece of feedback
router.post('/', async (req, res) => {
  const { feedback, feedbackType, email } = req.body;
  if (req.body) {
    await FeedbackService.addFeedback(email, feedbackType, feedback);
    res.json(`Feedback added successfully`);
  } else {
    res.send('Error in adding feedback');
  }
});

export default router;
