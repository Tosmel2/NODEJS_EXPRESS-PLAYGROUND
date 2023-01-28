import express from "express";
import dotenv from "dotenv";
import { dbConnect } from './config/dbConnect.js';
import userRoute from './routes/userRoute.js'
dotenv.config();
dbConnect();


const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/users", userRoute);


//login
app.use("/api/v1/users/login", userRoute);

//register
app.use("/api/v1/users/register", userRoute);


//error handlers

//listen server
const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));  