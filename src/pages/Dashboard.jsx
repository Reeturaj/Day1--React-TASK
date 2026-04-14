import { useState, useEffect } from "react";
import "../assets/Dashboard.css";



 //DAY1 : TASK1 : Create a Dashboard component that contains three sub-components: Sidebar, MainContent, and StatusFooter.
 
const navItems = [
    { label: "Dashboard", icon: "⬡" },
    { label: "Transactions", icon: "◈" },
    { label: "Reports", icon: "◉" },
    { label: "Settings", icon: "⚙" },
];

// ── SUB-COMPONENT 1: Sidebar ──
function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        <aside className="sidebar" style={{ width: sidebarOpen ? "220px" : "66px" }}>

            <div className="sidebar-logo">
                <div className="sidebar-logo-icon">⬡</div>
                {sidebarOpen && <span className="sidebar-logo-text">Demo</span>}
            </div>

            <nav className="sidebar-nav">
                {navItems.map(({ label, icon }) => (
                    <div key={label} className="nav-item">
                        <span className="nav-item-icon">{icon}</span>
                        {sidebarOpen && label}
                    </div>
                ))}
            </nav>

            <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? "◀ hide" : "▶"}
            </button>
        </aside>
    );
}

// ── SUB-COMPONENT 2: MainContent ──
function MainContent({ time }) {
    return (
        <div className="main-content">
            <header className="topbar">
                <div>
                    <div className="topbar-time">
                        {time.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} · {time.toLocaleTimeString()}
                    </div>
                    <h1 className="topbar-title">Dashboard</h1>
                </div>
                <div className="topbar-right">
                    <div className="status-badge">
                        <span className="status-dot" />
                        <span className="status-text">Connected</span>
                    </div>
                    <div className="avatar">R</div>
                </div>
            </header>
        </div>
    );
}

// ── SUB-COMPONENT 3: StatusFooter ──
function StatusFooter() {
    return (
        <div className="footer">
            <p className="footer-text">Status: Connected ✅</p>
        </div>
    );
}

// ── ROOT: Dashboard ──
function Dashboard() {
    const [time, setTime] = useState(new Date());
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="app-wrapper">
            <div className="app-body">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <MainContent time={time} />
            </div>
            <StatusFooter />
        </div>
    );
}

export default Dashboard;