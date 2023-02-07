import express  from "express";
import multer from "multer";
import {storage} from '../config/cloudinary.js';
import { deleteUser, getSpecificUser, displayAllUsers, profilePhotoUploadController, userLoginController, userRegisterController, updateUser } from "../controller/userController.js";
import isLogin from "../middleware/isLogin.js";


const userRouters = express.Router();
const upload = multer({storage})


// Register User
userRouters.post("/register", userRegisterController)

// Login user
userRouters.post("/login", userLoginController)

// get all users from
userRouters.get("", displayAllUsers)

// get user profile
userRouters.get("/profile/",isLogin, getSpecificUser)

// delete user
// userRouters.delete("/:id", deleteUserController)
userRouters.put("/:id", deleteUser)

// update user
// userRouters.put("/:id", userUpdateController)
userRouters.put("/:id", updateUser)

userRouters.post("/profile-image",isLogin, upload.single("profile"), profilePhotoUploadController )


export default userRouters;