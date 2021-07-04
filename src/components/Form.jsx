import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getCurrentTodo, getIsEdit, updateTodo } from "../store/todo";

export const Form = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(getCurrentTodo);
  const [todo, setTodo] = useState("");
  const isEdit = useSelector(getIsEdit);

  useEffect(() => {
    if (isEdit) setTodo(currentTodo);
  }, [currentTodo, isEdit]);

  const onSubmit = (e) => {
    e.preventDefault();
    const addOrUpdate = isEdit ? updateTodo : addTodo;
    dispatch(
      addOrUpdate({
        name: todo
      })
    );
    setTodo("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="todo">Todo</label>
            <input
              type="text"
              name="todo"
              className="form-control"
              placeholder="Input your todo name here"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            {!isEdit ? "ADD TODO" : "UPDATE TODO"}
          </button>
        </form>
      </div>
    </div>
  );
};
