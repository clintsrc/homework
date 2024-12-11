import feedbackRoutes from './feedbackRoutes.js';
import tipsRoutes from './tipsRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/feedback', feedbackRoutes);
router.use('/tips', tipsRoutes);    // add the tips routes to middleware

export default router;
