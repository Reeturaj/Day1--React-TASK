import "../assets/UserGateway.css";

//DAY1 : TASK3 : Create a UserGateway component
const user = {
    name: "Alex",
    role: "admin",      // "admin" | "user"
    status: "suspended",   // "active" | "suspended"
};

// ── SUB-COMPONENT 1: AdminPanel ──
function AdminPanel({ name }) {
    return (
        <div className="admin-panel">
            <h2>🛡️ Admin Panel</h2>
            <p>Welcome, <strong>{name}</strong>. You have full access.</p>
         
        </div>
    );
}

// ── SUB-COMPONENT 2: SuspendedWarning ──
function SuspendedWarning({ name }) {
    return (
        <div className="suspended-warning">
            <h2>⚠️ Contact Support</h2>
            <p><strong>{name}</strong>, your account has been suspended.</p>
        </div>
    );
}

// ── SUB-COMPONENT 3: RegularPanel ──
function RegularPanel({ name }) {
    return (
        <div className="regular-panel">
            <h2>👤 User Dashboard</h2>
            <p>Welcome back, <strong>{name}</strong>!</p>
        </div>
    );
}

// ── MAIN: UserGateway ──
function UserGateway() {
    const Meta = () => (
        <div className="gateway-meta">
            <span>Name: <strong>{user.name}</strong></span>
            <span>Role: <strong>{user.role}</strong></span>
            <span>Status: <strong>{user.status}</strong></span>
        </div>
    );

    if (user.status === "suspended") {
        return <div className="gateway-wrapper"><Meta /><SuspendedWarning name={user.name} /></div>;
    }

    if (user.role === "admin") {
        return <div className="gateway-wrapper"><Meta /><AdminPanel name={user.name} /></div>;
    }

    return <div className="gateway-wrapper"><Meta /><RegularPanel name={user.name} /></div>;
}

export default UserGateway;