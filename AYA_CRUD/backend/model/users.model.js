import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:[true, "Firstname is needed"]
    },
    lastname: {
        type:String,
        required:[true, "Lastname is needed"]
    },
    email: {
        type:String,
        required:[true, "Email is needed"]
    },
    password: {
        type:String,
        required:[true, "Password is needed"]
    },
    isBlocked: {
        type:Boolean,
        default:false
    },
    isAdmin: {
        type:Boolean,
        default:false
    },
    role: {
        type:String,
        enum:["Admin", "Editor", "Guest"]
    },
    views: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
},
{
    timestamps: true,
    toJSON: {virtuals: true}
});


const User = mongoose.model("User", userSchema)

export default User;