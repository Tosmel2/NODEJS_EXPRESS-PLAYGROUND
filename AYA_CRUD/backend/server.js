import path from 'path';
const __dirname = path.dirname("__public");

import express from "express";
import dotenv from "dotenv";
import { dbConnect } from './config/dbConnect.js';
import userRoutes from './routes/users.route.js';
import taskRoutes from './routes/tasks.route.js';
import cors from 'cors';
dotenv.config();
dbConnect();



const app = express();

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:8000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);




app.use(express.static(path.join(__dirname, "..", "public")));

// app.use(express.static(path.join(__dirname, "../public")));

//==============================USERS ROUTES==========================
//routes
app.use("/api/v1/users", userRoutes);

//register
app.use("/api/v1/users/register", userRoutes);

//login
app.use("/api/v1/users/login", userRoutes);


//==============================TASKS ROUTES===========================

//get all tasks
app.use("/api/v1/tasks", taskRoutes);

//get specific task
app.use("/api/v1/tasks/:id", taskRoutes);

//create task
app.use("/api/v1/tasks", taskRoutes);

//update task
app.use("/api/v1/tasks/:id", taskRoutes);

//delete task
app.use("/api/v1/tasks/:id", taskRoutes);

app.get("/*", (req, res) => {
  res.sendFile('/public/index.html', { root: __dirname });
  // res.sendFile(__dirname +  '/public/index.html');
  // res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


//error handlers

//listen server
const PORT = process.env.Port || 8000;
app.listen(PORT, () => console.log(`The CRUD backend app running on port ${PORT}`));  