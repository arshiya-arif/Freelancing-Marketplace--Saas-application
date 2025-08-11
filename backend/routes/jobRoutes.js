import express from 'express';
const router = express.Router();
import { createJob,getJobs, updateJob,deleteJob,getOpenJobs,jobDetails,markJobAsCompleted } from '../controllers/jobsController.js';
import {isAdmin} from '../middlewares/adminMiddleware.js';
import {isProtected} from '../middlewares/authMiddleware.js';
//create job route
router.route('/createjob').post(isProtected,isAdmin,createJob);
// get jobs route
router.route('/jobs').get(isProtected,isAdmin,getJobs);
//update job route
router.route('/job/:id').put(isProtected,isAdmin,updateJob);
//delete job route
router.route('/job/:id').delete(isProtected,isAdmin,deleteJob);
router.route('/openjobs').get(getOpenJobs);

router.route('/job/:id').get(jobDetails); // Get job details by ID
router.route('/job/:jobId/complete').put(isProtected, isAdmin, markJobAsCompleted); // Mark job as completed
export default router;
