import express  from "express";
import { createTask, updateTask, deleteTask, displayAllTasks, getSpecificTask } from "../controller/tasks.controller.js";
import isLogin from "../middleware/isLogin.js";


const taskRoutes = express.Router();


// TASKS ROUTES

//Create New Task List
taskRoutes.post("/", isLogin, createTask)

//Get All Tasks
taskRoutes.get("/", isLogin, displayAllTasks)

//Get Specific Task
taskRoutes.get("/:id", isLogin, getSpecificTask)

//Update Task
taskRoutes.put("/:id", isLogin, updateTask)

//Delete Task
taskRoutes.delete("/:id", isLogin, deleteTask)



export default taskRoutes;