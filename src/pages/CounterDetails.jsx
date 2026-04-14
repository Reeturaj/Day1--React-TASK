import { useState } from "react";
import "../assets/Counter.css";

// ── Light Switch Demo ──
function LightSwitch() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className={`light-box ${isOn ? "light-on" : "light-off"}`}>
            <p className="light-label">{isOn ? "💡 ON" : "🌑 OFF"}</p>
            <button className="light-btn" onClick={() => setIsOn(!isOn)}>
                Toggle Light
            </button>
        </div>
    );
}

// ── Counter App ──
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);  // prevent below zero
    const reset = () => setCount(0);

    return (
        <div className="counter-box">
            <p className="counter-label">Counter</p>
            <h1 className="counter-value">{count}</h1>
            {count === 0 && <p className="counter-warning">⚠ Cannot go below zero</p>}
            <div className="counter-btns">
                <button className="btn btn-increment" onClick={increment}>Increment</button>
                <button className="btn btn-reset"      onClick={reset}>Reset</button>
                <button className="btn btn-decrement" onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

// ── Parent ──
 function CounterDetails() {
    return (
        <div className="wrapper">
            <h1 className="page-title">useState Demo</h1>
            <LightSwitch />
            <Counter />
        </div>
    );
}

export default CounterDetails;