import React, { useState, useEffect } from "react";
import '../scss/AddTask.scss';

const AddTask = ({ addNewTask }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <form action="" className="formAddTask">
            <h2>New task </h2>
            <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} /> <br />
            <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} /> <br />
            <button onClick={(e) => addNewTask(e, title, description)}>Add Task <i className="fas fa-plus-circle"></i></button>
        </form>
    );
}

export default AddTask