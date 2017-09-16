//IMPORT REACT DEPENDENCIES
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


//IMPORT COMPONENTS
import Main from './components/Main';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
import MainMap from './components/MainMap';
import MiniMap from './components/MiniMap';
import Navbar from './components/Navbar';
import Report from './components/Report';
import Search from './components/Search';

//RENDER THE MAIN APP PAGE
const App = () =>{
 return <h1>HELLO, WORLD! </h1>
}

//DEFAULT APP TO BE USED IN INDEX.JS
export default App;