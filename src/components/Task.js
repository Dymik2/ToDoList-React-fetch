import React, { useState, useEffect } from "react";
import { getOperations } from "../api/operations";
import OperationList from "./OperationList";
import "../scss/Task.scss";

const Task = ({ task, deleteTask, changeTaskStatus }) => {
    const [operations, setOperations] = useState([]);
    const [form, setForm] = useState(false);
    useEffect(() => {
        getOperations(task.id, setOperations);
    }, []);


    const checkDeleteTask = () => {
        console.log(task.task);
        // if(task.task === []){
        //     deleteTask(task.id)
        // }
        deleteTask(task.id)
    }

    return (<div key={task.id} className="maintask">

        <div className="task">
            <div className="description">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
            <div className="btns">
                <button onClick={() => setForm(!form)}>Add operation <i className="fas fa-plus-circle"></i>
                </button>
                {task.status === "open" && <button onClick={() => changeTaskStatus(task.id, task)}>Finish <i className="fas fa-archive"></i>
                </button>}
                {task.status === "finish" && <button onClick={() => checkDeleteTask()}>Delete</button>}
            </div>
        </div>
        <OperationList taskId={task.id} operations={operations} setOperations={setOperations} form={form} setForm={setForm} />
    </div>);
}

export default Task;