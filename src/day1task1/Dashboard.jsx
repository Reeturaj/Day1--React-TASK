import "./Dashboard.css";

const navItems = [
    { label: "Dashboard", icon: "⬡" },
    { label: "Transactions", icon: "◈" },
    { label: "Reports", icon: "◉" },
    { label: "Settings", icon: "⚙" },
];

// ── SUB-COMPONENT 1: Sidebar ──
function Sidebar() {
    return (
        <aside className="sidebar" style={{ width: "220px" }}>
            <div className="sidebar-logo">
                <div className="sidebar-logo-icon">⬡</div>
                <span className="sidebar-logo-text">Demo</span>
            </div>
            <nav className="sidebar-nav">
                {navItems.map(({ label, icon }) => (
                    <div key={label} className="nav-item">
                        <span className="nav-item-icon">{icon}</span>
                        {label}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

// ── SUB-COMPONENT 2: MainContent ──
function MainContent() {
    return (
        <div className="main-content">
            <header className="topbar">
                <div className="topbar-title">Dashboard</div>
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
    return (
        <div className="app-wrapper">
            <div className="app-body">
                <Sidebar />
                <MainContent />
            </div>
            <StatusFooter />
        </div>
    );
}

export default Dashboard;