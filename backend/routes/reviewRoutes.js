import express from 'express';
import { freelancerReview, adminReview,getUserReviews } from '../controllers/reviewController.js';
const router = express.Router();

router.route('/freelancer/:jobId').post(freelancerReview);
router.route('/admin/:jobId').post(adminReview);
router.route('/user/:userId').get(getUserReviews);

export default router;
