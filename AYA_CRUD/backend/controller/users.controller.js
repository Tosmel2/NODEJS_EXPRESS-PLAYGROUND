import User from "../model/users.model.js";
import bcrypt from "bcrypt";
import generateToken from "../util/generatetoken.js";
// import obtainTokenFromHeader from "../util/obtaintokenfromheader.js";



export const userRegister = async(req, res) => {
    const {firstname, lastname, email, password} =req.body;
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
            password: hashPassword,
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

//login user
export const userLogin = async(req, res) => {
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
                data: {
                    firstname: foundUser.firstname,
                    lastname: foundUser.lastname,
                    email: foundUser.email,
                    token: generateToken(foundUser._id)
                }
            });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const displayAllUsers = async(req, res) => {
    try {
        res.json({
            status:"success",
            data:"Display all the users"
        })
        
    } catch (error) {
        res.json(error.message)
        
    }
}

//profile
export const getSpecificUser = async(req, res) => {
    try{
        const foundUser = await User.findById(req.userAuth);
        if(foundUser){
            return res.json({
                status: "success",
                data: {foundUser}
        });
        }else{
            res.json({
                status: "error",
                message: "User with such id does not exist"
        });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const updateUser = async(req, res) => {
    try{
        res.json({
            status: "success",
            data: "user details updated"
        });
    }catch(error){
        res.json(error.message)
    }
}


export const deleteUser = async(req, res) => {
    try{
        res.json({
            status: "user deleted"
        });
    }catch(error){
        res.json(error.message)
    }
}