import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DogList from "./DogList";
import Dog from "./Dog";
import NavBar from "./Nav"


import './App.css';
let data = require('/Users/jeffreyng/Downloads/react-router-dogfinder/src/db.json')

function App() {
 
  return (
    <div className="App">
  
  
    <BrowserRouter>
    <NavBar />
    <Routes>
   
    <Route path="/dogs" element={
      <DogList />} /> 
    
    <Route path="/dogs/:id" element={

    <Dog name = {data['dogs'][0]['name']} age={data['dogs'][0]['age']} facts= {data['dogs'][0]['facts']} src={data['dogs'][0]['src']}/>} />
    
 
    </Routes>
    </BrowserRouter>
    </div>
  );
}



export default App;
