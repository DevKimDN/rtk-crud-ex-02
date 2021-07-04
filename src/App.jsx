import React from "react";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

import "./styles.css";

export const App = () => (
  <div className="container p-5">
    <h3 className="text-center">Welcome To Todo App With React</h3>
    <Form />
    <br />
    <Table />
  </div>
);
