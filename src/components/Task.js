import React, { useState, useEffect } from "react";
import { getOperations } from "../api/operations";
import OperationList from "./OperationList";

const Task = ({ task, deleteTask, changeTaskStatus }) => {
    const [operations, setOperations] = useState([]);
    const [form, setForm] = useState(false);
    console.log(task.id);
    useEffect(() => {
        getOperations(task.id, setOperations);
    }, []);


    return (<div >
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
        <div>
            <button onClick={() => setForm(!form)}>Add operation</button>
            {task.status === "open" && <button onClick={() => changeTaskStatus(task.id, task)}>Finish</button>}
            {task.status === "finish" && <button onClick={() => deleteTask(task.id)}>Delete</button>}
        </div>
        <OperationList taskId={task.id} operations={operations} setOperations={setOperations} form={form} setForm={setForm} />
    </div>);
}

export default Task;