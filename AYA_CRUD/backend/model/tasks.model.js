import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true, "Title is needed"]
    },
    completed: {
        type:Boolean,
        default:false
    },
},
{
    timestamps: true,
    toJSON: {virtuals: true}
});


const Task = mongoose.model("Task", taskSchema)

export default Task;