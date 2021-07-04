import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../../store/todo";

const Component = ({ todo, index }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => dispatch(removeTodo({ id }));

  const onEdit = (todo) => dispatch(editTodo(todo));

  return (
    <tr key={todo.id}>
      <td>{++index}</td>
      <td>{todo.id}</td>
      <td>{todo.name}</td>
      <td>
        <button
          className="btn btn-warning btn-sm mx-1"
          onClick={() => onEdit(todo)}
        >
          EDIT
        </button>
        <button
          className="btn btn-danger btn-sm mx-1"
          onClick={() => onDelete(todo.id)}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export const Row = memo(Component);
