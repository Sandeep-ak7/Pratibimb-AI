import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import { image } from 'motion/react-client';
import imageRouter from './routes/imageRoutes.js';

// This file sets up the Express server and connects to the database
const PORT = process.env.PORT || 4000
const app = express() 
// Middleware to parse JSON requests and enable CORS
app.use(express.json())
app.use(cors())
await connectDB()

// Importing user routes and setting up the API endpoints
// The userRouter handles user registration and login
// The API endpoints are prefixed with /api/users

app.use('/api/user',userRouter)
app.use('/api/image ',imageRouter)
app.get('/', (req, res) => res.send('API working !'))

app.listen(PORT, () => console.log('Server is running on port '+ PORT ));