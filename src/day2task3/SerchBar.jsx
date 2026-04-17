import { useState } from "react";
import "./SearchBar.css";

//DAY2 : TASK3 : Event Handling & Transitions

// ── Demo: onChange real-time capture ──
function InputDemo() {
    const [text, setText] = useState("");

    return (
        <div className="demo-box">
            <p className="section-label">onChange Demo</p>
            <input
                className="search-input"
                type="text"
                placeholder="Type something..."
                onChange={(e) => setText(e.target.value)}  // e.target.value = what user typed
            />
            <p className="demo-output">You typed: <span>{text}</span></p>
        </div>
    );
}

// ── Exercise: Search bar → UPPERCASE label ──
function SearchBar() {
    const [query, setQuery] = useState("");

    return (
        <div className="demo-box">
            <p className="section-label">Search Bar</p>
            <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
                <p className="uppercase-label">{query.toUpperCase()}</p>
            )}
        </div>
    );
}

// ── Parent ──
 function SearchBarDetails() {
    return (
        <div className="wrapper">
            <h1 className="page-title">Event Handling</h1>
            <InputDemo />
            <SearchBar />
        </div>
    );
}

export default SearchBarDetails;