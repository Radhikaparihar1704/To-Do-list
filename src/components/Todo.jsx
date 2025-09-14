

import React, { useState } from 'react';

function Todopractice() {
  const [val, setVal] = useState("");
  const [task, setTask] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const buttonHandler = () => {
    if (val.trim() === "") return;

    if (editTask !== null) {
      const updated = [...task];
      updated[editTask].text = val;
      setTask(updated);
      setEditTask(null);
    } else {
      setTask([...task, { text: val, onactive: false }]);
    }
    setVal("");
  };

  const removeButton = (i) => {
    setTask(task.filter((_, index) => index !== i));
  };

  const edit = (index) => {
    setEditTask(index);
    setVal(task[index].text);
  };

  const checkbox = (i) => {
    setTask(
      task.map((item, index) =>
        index === i ? { ...item, onactive: !item.onactive } : item
      )
    );
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-start p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">TO-DO List</h1>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 px-4 py-2 border rounded-md text-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={buttonHandler}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 w-full sm:w-auto"
          >
            {editTask !== null ? "Update" : "Add +"}
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {task.map((item, i) => (
            <li
              key={i}
              className={`flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-2 rounded-md border ${
                item.onactive ? "bg-green-100 border-green-300" : "bg-gray-50 border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <input
                  type="checkbox"
                  checked={item.onactive}
                  onChange={() => checkbox(i)}
                  className="w-5 h-5"
                />
                <span
                  className={`text-lg ${item.onactive ? "line-through text-gray-500" : "text-black"}`}
                >
                  {item.text}
                </span>
              </div>

              <div className="flex gap-2 justify-end">
                {item.onactive ? (
                  <span className="text-green-700 font-semibold">Completed ✔</span>
                ) : (
                  <>
                    <button
                      onClick={() => edit(i)}
                      className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500 w-full sm:w-auto"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeButton(i)}
                      className="bg-red-400 px-3 py-1 rounded-md hover:bg-red-500 w-full sm:w-auto"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todopractice;
