import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import UserAuthRoutes from './routes/userAuthRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import bidRoutes from './routes/bidRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import freelancerTaskRoutes from './routes/freelancerTaskRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import cors from 'cors';
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    // origin: process.env.FRONTEND_URL,
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use("/api/review", reviewRoutes);
app.use("/api/notifications",notificationRoutes);
app.use("/api/bids", bidRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/auth",UserAuthRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/tasks", freelancerTaskRoutes);
connectDB();

app.listen(process.env.PORT||5001,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

