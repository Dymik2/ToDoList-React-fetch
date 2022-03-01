import './App.css';
import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./api/constants";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([]);
  const [add, setAdd] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/tasks`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setTasks(data.data);
      })
      .catch((err) => console.log(err));

  }, [add])

  const deleteTask = (id) => {

    fetch(`${API_URL}/tasks/${id}`, {
      headers: {
        "Authorization": API_KEY
      },
      method: "DELETE"
    })
      .then(r => r.json())
      .then(data => {
        setTasks(tasks.filter(task => task.id !== id))
      })
      .catch(err => console.log(err));

  }

  const changeTaskStatus = (id, task) => {

    fetch(`${API_URL}/tasks/${id}`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(task)
    })
      .then(r => r.json())
      .then(data => {
        setTasks(tasks.map((el) => {
          if (el.id === id) {
            el.status = "finish"
          }
          return el;
        }))
      })
      .catch(err => console.log(err));
  }

  const addNewTask = (e, title, description) => {
    e.preventDefault();
    const data = {
      description: description,
      addedDate: new Date(),
      status: "open",
      title: title
    }

    fetch(`${API_URL}/tasks`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(data => {
        setAdd(prevState => prevState + 1);
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='mainApp'>
      <AddTask addNewTask={addNewTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} />
    </div>
  );
}

export default App;
