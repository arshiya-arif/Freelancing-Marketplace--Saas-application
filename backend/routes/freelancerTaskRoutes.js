import express from 'express';
import { isProtected } from '../middlewares/authMiddleware.js';
import { isFreelancer } from '../middlewares/freelancerMiddleware.js';
import { startJobTask,getAllMyTasks, submitTask } from '../controllers/freelancerTasksController.js';
import upload from '../middlewares/uploadMiddleware.js'
const router = express.Router();

router.route('/:taskId/start').put(isProtected, isFreelancer, startJobTask);
router.route('/my-tasks').get(isProtected, isFreelancer, getAllMyTasks);


router.route('/submit/:taskId').put(isProtected, isFreelancer, upload.single('file'), submitTask);
export default router;
