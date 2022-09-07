import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Employees from "./component/employees/Employees";
import Stocks from "./component/stocks/Stocks";
import StockDetails from "./component/stocks/StockDetails";
import EmployeeDetails from "./component/employees/EmployeeDetails";

let App = () => {

    return (
        <React.Fragment>
             
            <BrowserRouter>
            <Navbar/>
            <Routes>
               
                
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="/about" element={<About/>}/>
                    <Route  path="/employees" element={<Employees/>}/>
                    <Route  path="/employees/:id" element={<EmployeeDetails/>}/>
                    <Route  path="/stocks" element={<Stocks/>}/>
                    <Route  path="/stocks/:id" element={<StockDetails/>}/>
               
            </Routes>
            


            </BrowserRouter>
        </React.Fragment>
    );
};
export default App;
