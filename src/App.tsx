import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="app">
      <Nav/>
        <Home/>
    </div>
  );
}

export default App;
