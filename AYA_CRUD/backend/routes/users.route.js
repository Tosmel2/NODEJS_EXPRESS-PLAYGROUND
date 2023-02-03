import express  from "express";
import { deleteUser, getSpecificUser, displayAllUsers, userLogin, userRegister, updateUser } from "../controller/users.controller.js";
import isLogin from "../middleware/isLogin.js";


const userRouters = express.Router();


// Register User
userRouters.post("/register", userRegister)

// Login user
userRouters.post("/login", userLogin)

// get all users from
userRouters.get("", displayAllUsers)

// get user profile
userRouters.get("/profile/",isLogin, getSpecificUser)

// delete user
userRouters.put("/:id", deleteUser)

// update user
userRouters.put("/:id", updateUser)



export default userRouters;