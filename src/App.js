import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  var [updateMode, setUpdateMode] = useState([1,2,3]);
  var [updateMode1, setUpdateMode1] = useState([1,2,3]);


  const editProd = async (e) => {
    setUpdateMode([4,5]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id = "a">
          Edit <code>src/App.js</code> and save to reload.
          hi i am in
          {updateMode}

        </p>
        <a href="/umma">Umma</a>
        <a href="/sarah">Sarah</a>


        <a onClick = {editProd}>Click me</a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {updateMode1}

        </a>
      </header>
    </div>
  );
}

export default App;
