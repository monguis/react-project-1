import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TableAssembler from "./components/tableAssembler";

function App() {
  return (
  <TableAssembler source={"https://dummy.restapiexample.com/api/v1/employees"} />
  );
}

export default App;
