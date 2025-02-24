import type { Request, Response } from 'express';
import { Feedback } from '../models/feedback.js';

// Get all feedback
export const getAllFeedback = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get feedback by ID
export const getFeedbackById = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (feedback) {
      res.status(200).json(feedback);
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new feedback
export const createFeedback = async (req: Request, res: Response) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update feedback by ID
export const updateFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findByPk(req.body.id);
    if (feedback) {
      await feedback.update(req.params);
      res.status(200).json(feedback);
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete feedback by ID
export const deleteFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findByPk(req.body.id);
    if (feedback) {
      await feedback.delete();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
