import React, { useReducer } from "react";


function Task({ content }) {
  return <li>{content}</li>;
}

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      if (!action.payload.trim()) return state;
      return [...state, { id: Date.now(), content: action.payload }];
    default:
      return state;
  }
}

function TaskManager() {
  const [input, setInput] = React.useState("");
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleAdd = () => {
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div style={{ margin: 30 }}>
      <h2>Việc cần làm</h2>
      <div style={{ marginBottom: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Nhập việc cần làm..."
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} content={task.content} />
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
