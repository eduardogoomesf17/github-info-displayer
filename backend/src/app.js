import express, { json, urlencoded } from 'express';
import cors from 'cors';

import userRepoRoutes from './routes/userRepo';

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/repositories', userRepoRoutes);


export default app;
