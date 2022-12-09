import React from 'react';
import Header1 from "./Header1";
import Body1 from "./Body1";
import Footer1 from "./Footer1";
import Comp from "./comp";
import Auto from "./Cars";


// let arrStudents = [
//     {id:1, name:'George', age:3},
//     {id:2, name:'Greg', age:133},
//     {id:3, name:'Sandu', age:23}
// ]

let arrTopCars = [
    {manufacturer:'BMW', model:'cRt'},
    {manufacturer:'AUDI', model:'Gtr'},
    {manufacturer:'Mercedes', model:'ARt'}
]

const App1 = () => {
    return (
        <div>
           {/*<Comp students={arrStudents} />*/}
            <Auto cardio={arrTopCars} />
        </div>
    )
}
export default App1