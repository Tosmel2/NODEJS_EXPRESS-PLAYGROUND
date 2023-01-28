import User from "../model/users/userModel.js";
import bcrypt from "bcrypt";


export const userRegisterController = async(req, res) => {
    const {firstname, lastname, profilephoto, email, password} =req.body;
    const foundUser = await User.findOne({email});
    try{
        if(foundUser){
            res.json({
                status: "error",
                data: "User already exists"
            });
        }else{
            //hashPasword
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstname, 
            lastname, 
            email, 
            password: hashPassword
        })

        res.json({
            status: "success",
            data: user
        });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const userLoginController = async(req, res) => {
    const {email, password} = req.body;
    
    try{
        const foundUser = await User.findOne({email});
        if(!foundUser){
            return res.json({
                status: "error",
                message: "Wrong login details"
            });
        }

        const userPassword = await bcrypt.compare(password, foundUser.password);
        if(!userPassword){
            return res.json({
                status: "error",
                message: "Wrong login details"
            });
        }else{
            res.json({
                status: "success",
                // data: "Your details has successfully logged in"
                data: {
                    firstname: foundUser.firstname,
                    lastname: foundUser.lastname,
                    email: foundUser.email
                }
            });
        }
    }catch(error){
        res.json(error.message)
    }
}

//profile
export const getSpecificUser = async(req, res) => {
    const {id} = req.params;
    try{
        const foundUser = await User.findById(id);
        if(foundUser){
            res.json({
                status: "success",
                data: {foundUser}
        });
        }else{
            res.json({
                status: "success",
                message: "User not found"
        });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const userUpdateController = async(req, res) => {
    try{
        res.json({
            status: "success",
            data: "user details updated"
        });
    }catch(error){
        res.json(error.message)
    }
}

export const deleteUserController = async(req, res) => {
    try{
        res.json({
            status: "user deleted"
        });
    }catch(error){
        res.json(error.message)
    }
}