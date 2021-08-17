import React, { useState } from "react";

function Todo() {
  let [todo, setTodo] = useState([]);
  let [text, setText] = useState("");
  let [edit, setEdit] = useState({});
  let [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    setTodo([...todo, text]);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let temp = [...todo];
    temp[edit.id] = editText;
    setEditText("");
    setEdit({});
    setTodo(temp);
  };

  const handleRemove = (index) => {
    let temp = [...todo];
    temp.splice(index, 1);
    setTodo(temp);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
      <div className="todo_container">
        {todo.map((x, index) => {
          return (
            <div className="todo_element" key={index}>
              <p>
                {index + 1}: {x}
              </p>
              <button onClick={(e) => handleRemove(index)}>Remove</button>
              <button onClick={(e) => setEdit({ id: index })}>Edit</button>
              {edit.id === index && (
                <form onSubmit={(e) => handleEditSubmit(e)}>
                  <input
                    defaultValue={todo[edit.id]}
                    onChange={(e) => setEditText(e.target.value)}
                  ></input>
                  <button type="submit">Update</button>
                </form>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
