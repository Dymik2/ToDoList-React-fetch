import React, { useState, useEffect } from "react";
import { getOperations } from "../api/operations";

const Task = ({ task, deleteTask, changeTaskStatus }) => {
    const [operations, setOperations] = useState();

    useEffect(() => {
        /**
         * After component mount fetch all operation in this task
         * @function getOperations - API function
         */
        getOperations(task.id, setOperations);
    }, []);

    return (<div >
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
        <div>
            <button>Add operation</button>
            {task.status === "open" && <button onClick={() => changeTaskStatus(task.id, task)}>Finish</button>}
            {task.status === "finish" && <button onClick={() => deleteTask(task.id)}>Delete</button>}
        </div>

    </div>);
}

export default Task;