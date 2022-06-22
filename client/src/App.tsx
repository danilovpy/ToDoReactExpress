import React from "react";
import "./App.css";
import { Home } from "../src/features/home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AllTodo } from "./features/todo/AllTodo";

function App() {
  return (
    <Router>
      <div className="App">
        <p>To Do App</p>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<AllTodo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
