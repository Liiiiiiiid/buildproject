import { Routes, Route,Link } from "react-router-dom";
import Content from "./pages/Content";
import './App.css';
import React, { useState } from "react";
import Filter from "./modal/Filters";
import Info from './pages/Info';
import Error from './pages/Error';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [filter, setFilter] = useState({
                genres:"",
                dir: ""
  });
  return (
    <div className="App">
      <header className="p-3" style={{backgroundcolor: "#A52A2A"}}>
        <nav className="navbar" style={{backgroundcolor: "#A52A2A"}}>
          <div className="container-fluid">
            <a className="navbar-brand">Фильмотека</a>
          </div>
        </nav>
      </header>
      <div className="container">
      <Filter active={modalActive} setActive={setModalActive} setFilter={setFilter} />
      </div>
      
      <Routes>
        <Route path="/" element={<Content filter={filter}/>}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
     </div>
   
  );
}

export default App;
