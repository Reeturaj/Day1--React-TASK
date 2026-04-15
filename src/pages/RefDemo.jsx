import { useRef, useEffect } from "react";
import "../assets/RefDemo.css";

// ── Demo: button click → focus input ──
function FocusDemo() {
    const inputRef = useRef(null);

    return (
        <div className="demo-box">
            <p className="section-label">useRef Demo — Click to Focus</p>
            <input
                ref={inputRef}
                className="form-input"
                type="text"
                placeholder="Click the button to focus me..."
            />
            <button
                className="focus-btn"
                onClick={() => inputRef.current.focus()}
            >
                Focus Input
            </button>
        </div>
    );
}

// ── Exercise: Auto focus on page load ──
function AutoFocusForm() {
    const firstNameRef = useRef(null);
    const lastNameRef  = useRef(null);
    const emailRef     = useRef(null);

    // auto focus first input when page loads
    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    return (
        <div className="demo-box">
            <p className="section-label">Form — Auto Focus on Load</p>
            <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                    ref={firstNameRef}
                    className="form-input"
                    type="text"
                    placeholder="Auto focused on load..."
                />
            </div>
            <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                    ref={lastNameRef}
                    className="form-input"
                    type="text"
                    placeholder="Last name..."
                />
            </div>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input
                    ref={emailRef}
                    className="form-input"
                    type="email"
                    placeholder="Email..."
                />
            </div>
            <button className="focus-btn">Submit</button>
        </div>
    );
}

// ── Parent ──
 function RefDemo() {
    return (
        <div className="wrapper">
            <h1 className="page-title">useRef Demo</h1>
            <FocusDemo />
            <AutoFocusForm />
        </div>
    );
}

export default RefDemo;