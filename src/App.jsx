import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Input from "./components/common/Input";
import "./assets/Dashboard.css";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import UserGateway from './pages/UserGateway';
import DayoneTaskfour from './pages/DayoneTaskfour';

function App() {

  return (
    //DAY1 : TASK1 : Create a Dashboard component that contains three sub-components: Sidebar, MainContent, and StatusFooter.
    <Dashboard />
    //DAY1 : TASK2 : Re-structure to follow pattern
    //<Home/>
    //DAY1 : TASK3 : Create a UserGateway component
    // <UserGateway/>
    //DAY1 : TASK4 :Create a JSX element that displays the current year using a JavaScript new Date() object inside curly braces {}
    //<DayoneTaskfour />
  );
}

export default App
