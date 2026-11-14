
import { useState } from 'react'

const Todoaplication = () => {

  // State
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  // Input Change
  const handleChange = (event) => {
    setTask(event.target.value);
  }

  // Add Task
  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }
  
  

    setAllTask([...allTask, task]);
    setTask("");
  }


  // Delete Task
  const handleDelete = (index) => {
    const updatedTask = allTask.filter((item, i) => {
      return i !== index;
    });

    setAllTask(updatedTask);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="container bg-amber-100 w-100 min-h-100 border-2 border-black rounded-2xl p-5">

        <h1 className="text-center text-3xl font-bold mt-5">
          My Todo List
        </h1>

        <p className="text-center mb-5">
          Enter your daily tasks
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex justify-around gap-2"
        >
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={handleChange}
            className="p-2 border rounded-2xl min-w-0 flex-1"
          />

          <button
            type="submit"
            className="bg-green-600 p-3 px-5 rounded-2xl text-white font-bold hover:bg-green-800 cursor-pointer"
          >
            Add
          </button>
        </form>

        <div className="data mt-10">

          <h2 className="text-center text-xl font-serif mb-4">
            Task List
          </h2>

          <ul>
            {allTask.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center gap-2 ml-2 mr-2 mb-4"
              >
                <span className="break-all">{item}</span>

                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 p-1 px-3 rounded-xl text-white hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  )
}

export default Todoaplication
