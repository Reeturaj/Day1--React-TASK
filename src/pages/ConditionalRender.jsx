import { useState } from "react";
import "../assets/ConditionalRender.css";

//DAY2 : TASK4 : Conditional Rendering

const isLoggedIn = true;

// ── Method 1: If / Else ──
function IfElseDemo() {
    if (isLoggedIn) {
        return (
            <div className="demo-box">
                <p className="section-label">Method 1 — If / Else</p>
                <button className="logout-btn">Logout</button>
            </div>
        );
    } else {
        return (
            <div className="demo-box">
                <p className="section-label">Method 1 — If / Else</p>
                <p className="muted">Not logged in</p>
            </div>
        );
    }
}

// ── Method 2: Logical && ──
function LogicalAndDemo() {
    return (
        <div className="demo-box">
            <p className="section-label">Method 2 — Logical &&</p>
            {isLoggedIn && <button className="logout-btn">Logout</button>}
        </div>
    );
}

// ── Method 3: Ternary ──
function TernaryDemo() {
    return (
        <div className="demo-box">
            <p className="section-label">Method 3 — Ternary ✅ Most Common</p>
            {isLoggedIn
                ? <button className="logout-btn">Logout</button>
                : <p className="muted">Not logged in</p>
            }
        </div>
    );
}

// ── Exercise: Secret Message ──
function SecretMessage() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="demo-box">
            <p className="section-label">Secret Message</p>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                Show Secret Message
            </label>
            {checked && (
                <div className="secret-box">
                    <p className="secret-text">🤫 The secret is: React is awesome!</p>
                </div>
            )}
        </div>
    );
}

// ── Parent ──
 function ConditionalRender() {
    return (
        <div className="wrapper">
            <h1 className="page-title">Conditional Rendering</h1>
            <IfElseDemo />
            <LogicalAndDemo />
            <TernaryDemo />
            <SecretMessage />
        </div>
    );
}

export default ConditionalRender;