import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../store/todo";
import { Row } from "./Row";

export const Table = () => {
  const todos = useSelector(getTodos);

  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-hover table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!todos || !todos.length ? (
              <tr>
                <td colSpan="4" className="text-center">
                  <h3>No Todos yet</h3>
                </td>
              </tr>
            ) : (
              todos.map((todo, index) => (
                <Row todo={todo} key={index} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
