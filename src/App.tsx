import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordeon";
import {Rating} from "./components/rating/Rating";


function App() {
    const [value, setValue] = useState(0)
  return (
    <div>
     This is App component

        <Accordion title={'Menu'}   />
        <Rating selected={value} onChange={setValue} />
    </div>
  );
}


export default App;
