import Task from "../model/tasks.model.js";

export const createTask = async(req, res) => {
    try{
        const {title} = req.body;

        // Save the new task in the database
        const task = await Task.create({
            title,
            completed
        });

        // Return a success response
        return res.status(201).json({
            status: "success",
            data: task
        });
    }catch(error){
        // Return an error response
        return res.status(500).json({
            status: "error",
            message: "An error occurred while creating the task."
        });
    }
}


export const displayAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json({
            status:"success",
            data:{tasks}
        })
        
    } catch (error) {
        res.json(error.message)
        
    }
}

export const getSpecificTask = async(req, res) => {
    try{
        const foundTask = await Task.findById(req.params.id);
        if(foundTask){
            return res.json({
                status: "success",
                data: {foundTask}
        });
        }else{
            res.json({
                status: "error",
                message: "Task with such id does not exist"
        });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const updateTask = async(req, res) => {
    try{
        const {title} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            title,
        }, {new: true});
        if(updatedTask){
            return res.json({
                status: "success",
                data: {updatedTask}
        });
        }else{
            res.json({
                status: "error",
                message: "Task with such id does not exist"
        });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const deleteTask = async(req, res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(deletedTask){
            return res.json({
                status: "success",
                data: {deletedTask}
        });
        }else{
            res.json({
                status: "error",
                message: "Task with such id does not exist"
        });
        }
    }catch(error){
        res.json(error.message)
    }
}



