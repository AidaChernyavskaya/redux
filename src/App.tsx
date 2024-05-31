import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
        <Counter/>
        <TodoList/>
        <Posts/>
    </div>
  );
}

export default App;
