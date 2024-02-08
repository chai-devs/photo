import React from "react";
import Home from "./Home";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
const App = () => {
  return (
    <>
    <Router>
    <Routes>
       <Route path="/" element={<NavBar/>} />
       </Routes>.
       <Routes>
       <Route path="/" element={<Home />} /> 
       </Routes>
       <Routes>
       <Route path="/" element={<Form />} />  
      </Routes>
    </Router>
    </>
  );
};

export default App;
