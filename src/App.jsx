import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Input from "./components/common/Input";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './day1task1/Dashboard';
import Home from './day1task2/Home';
import UserGateway from './day1task3/UserGateway';
import DayoneTaskfour from './day1task4/DayoneTaskfour';
import UserProfile from './day2task1/Dasboard';
import CounterDetails from './day2task2/CounterDetails';
import SearchBarDetails from './day2task3/SerchBar';
import ConditionalRender from './day2task4/ConditionalRender';
import TodoListDetails from './day2task5/TodoList';
import RefDemo from './day2task6/RefDemo';
import Button from './day3task1/Button';
import StatusCard from './day3task2/StatusCard';
import Header from './day3task3/Header';
import Footer from './day3task3/Footer';
import Navbar from './day3task4/Navbar';

function App() {

  return (
    //DAY1 : TASK1 : Create a Dashboard component that contains three sub-components: Sidebar, MainContent, and StatusFooter.
    //<Dashboard />
    //DAY1 : TASK2 : Re-structure to follow pattern
    // <Home/>
    //DAY1 : TASK3 : Create a UserGateway component
    //<UserGateway/>
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
    // <TodoListDetails />
    //DAY2 : TASK6 : Conditional Rendering
    // <RefDemo />
    //DAY3 : TASK1 
    //<Button/>
    //DAY3 : TASK2
    //  <div>
    //     <StatusCard type="success" />  {/* success or error */}
    //   </div>
    ///======
    //DAY3 : TASK3
    // <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    //   <Header />
    //   <main style={{ flex: 1 }}>
    //   </main>
    //   <Footer />
    // </div>
    ////====
    //Day3 : TASK4
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Navbar />
      <main style={{ flex: 1 }}>
      </main>
      <Footer />
    </div>
    //========



  );
}

export default App
