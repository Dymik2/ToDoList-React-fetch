import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../api/constants";
import Task from "./Task";
import "../scss/Task.scss";

const TaskList = ({ tasks, deleteTask, changeTaskStatus }) => {

    return (
        <div className="taskList">
            {tasks.map(task => {
                return <Task key={task.id} task={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} />
            })}
        </div>
    );
}

export default TaskList;
