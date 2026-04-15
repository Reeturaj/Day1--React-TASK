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
import UserProfile from './pages/UserProfileDeatils';
import CounterDetails from './pages/CounterDetails';
import SearchBarDetails from './pages/SerchBar';
import ConditionalRender from './pages/ConditionalRender';
import TodoListDetails from './pages/TodoList';
import RefDemo from './pages/RefDemo';

function App() {

  return (
    //DAY1 : TASK1 : Create a Dashboard component that contains three sub-components: Sidebar, MainContent, and StatusFooter.
    //<Dashboard />
    //DAY1 : TASK2 : Re-structure to follow pattern
    //<Home/>
    //DAY1 : TASK3 : Create a UserGateway component
    // <UserGateway/>
    //DAY1 : TASK4 :Create a JSX element that displays the current year using a JavaScript new Date() object inside curly braces {}
    //<DayoneTaskfour />
    //DAY2 : TASK1 : Functional Components & Props
    //<UserProfile />
    //DAY2 : TASK2 : Managing State with useState
    //<CounterDetails />
    //DAY2 : TASK3 : Event Handling & Transitions
    //<SearchBarDetails />
    //DAY2 : TASK4 : Conditional Rendering
    //<ConditionalRender />
   //DAY2 : TASK5 : Conditional Rendering
    //<TodoListDetails />
    //DAY2 : TASK6 : Conditional Rendering
    <RefDemo />
  );
}

export default App
