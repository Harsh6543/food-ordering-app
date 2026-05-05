import { useState } from "react";
import "./ToDo.css";

const priorityOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

const AdvancedTodo = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priorityMode, setPriorityMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");


  todos.sort((a, b) => {
    // Priority comparison
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }

    // Same priority → Deadline comparison
    if (a.deadline && b.deadline) {
      return new Date(a.deadline) - new Date(b.deadline);
    }

    return 0;
  });
  
  const handleAdd = () => {
    if (task.trim() === "") {
      setError("Task name is required");
      return;
    }

    if (priorityMode && priority === "") {
      setError("Priority is required in Priority Mode");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      priority: priorityMode ? priority : null,
      deadline: deadline || null,
      completed: false,
    };

    let updatedTodos = [...todos, newTask];

      if (priorityMode) {
          updatedTodos = sortTodos(updatedTodos);
        }

        setTodos(updatedTodos);
      };

    // Smart sorting when Priority Mode is ON
    if (priorityMode) {
      updatedTodos.sort((a, b) => {
        const p1 = priorityOrder[a.priority];
        const p2 = priorityOrder[b.priority];

        if (p1 !== p2) return p1 - p2;

        // Final Twist: sort by earliest deadline inside same priority
        if (a.deadline && b.deadline) {
          return new Date(a.deadline) - new Date(b.deadline);
        }

        return 0;
      });
    }

    setTodos(updatedTodos);
    setTask("");
    setPriority("");
    setDeadline("");
    setError("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Pending") return !t.completed;
    return true;
  });

  const handlePriorityToggle = () => {
  setPriorityMode(!priorityMode);

  if (!priorityMode) {
    setTodos(sortTodos(todos));
  }
}


  return (
    <div className="todo-container">
      <h2>Task Manager</h2>

      {/* Priority Mode */}
      <div className="toggle">
        <label>
          <input
            type="checkbox"
            checked={priorityMode}
            onChange={() => setPriorityMode(!priorityMode)}
          />
          Priority Mode
        </label>
      </div>

      {/* Input Section */}
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {priorityMode && (
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      )}

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handleAdd}>Create Task</button>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>

      {/* Task List */}
      <ul>
        {filteredTodos.map((t) => (
          <li
            key={t.id}
            className={`${t.priority ? t.priority.toLowerCase() : ""} ${
              t.completed ? "done" : ""
            }`}
          >
            <div>
              <strong>{t.text}</strong>
              {t.priority && <span> ({t.priority})</span>}
              {t.deadline && <span> | ⏰ {t.deadline}</span>}
            </div>

            <div>
              <button onClick={() => toggleComplete(t.id)}>
                {t.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );

export default AdvancedTodo;


