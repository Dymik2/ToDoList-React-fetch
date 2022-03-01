import React, { useState, useEffect } from "react";

const AddTask = ({ addNewTask }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <form action="">
            <h2>New Task</h2>
            <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} /> <br />
            <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} /> <br />
            <button onClick={(e) => addNewTask(e, title, description)}>Add Task</button>
        </form>
    );
}

export default AddTask