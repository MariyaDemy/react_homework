import React from "react";
import './hm2/App2.css';
import TestClassComponent from "./hm2/TestClassComponent";
import Counter from './hm2/Counter';
import { useState } from 'react';
import Header from './hm2/Header';
import Sidebar from "./hm2/Sidebar";
import Content from "./hm2/Content";
import Footer from "./hm2/Footer";



const App = () => {

    // const [counter, setCounter] = useState(0);

    return (
        <div className="App-wrapper">
            {/* <div>
                <TestClassComponent label="My label"></TestClassComponent>
                <TestClassComponent></TestClassComponent>
            </div>

            <div>
                <Counter></Counter>
            </div>


            <button onClick={() => setCounter(counter + 1)}>increment app counter</button>
            <h1>{counter}</h1>

            <Counter appCounter={counter} setCounter={setCounter}></Counter> */}

            <Header />
            <Sidebar></Sidebar>
            <Content></Content>
            <Footer></Footer>
        </div>
    );

}


export default App;
