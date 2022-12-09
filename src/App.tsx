import React from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordeon";
import {Rating} from "./components/Rating";


function App() {
  return (
    <div>
     This is App component

        <Accordion title={'Menu'}   />
        <Rating />
    </div>
  );
}


export default App;
