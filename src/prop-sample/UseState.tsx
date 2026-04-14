import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // function handleIslogin(){
  //   setIsLoggedIn(!isLoggedIn)
  // }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

  {/*
  <button onClick={handleIslogin}>Logout</button>
  {
    isLoggedIn ? <p>logout</p> : <p>login</p>
  }
  */}
</>
  );
}