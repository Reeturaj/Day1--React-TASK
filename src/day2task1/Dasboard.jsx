import "./UserProfile.css";

//DAY2 : TASK1 : Functional Components & Props

const data = { username: "Alex", age: 28, isAdmin: true };

// ── CHILD 1: prop by prop ──
function Welcome(props) {
    return (
        <div className="profile-card">
            <p className="profile-name">Hello {props.username}</p>
            <p className="profile-age">Your age: {props.age}</p>
        </div>
    );
}

// ── CHILD 2: object spread ──
function Child({ username, age, isAdmin }) {
    return (
        <div className="profile-card">
            <p className="profile-name">Name: {username}</p>
            <p className="profile-age">Age: {age}</p>
            <span className={`profile-badge ${isAdmin ? "badge-admin" : "badge-user"}`}>
                {isAdmin ? "🛡️ Admin" : "👤 User"}
            </span>
        </div>
    );
}

// ── CHILD 3: destructure with default ──
function DestructureSample({ username = "Guest" }) {
    return (
        <div className="profile-card">
            <p className="profile-name">Hello {username}</p>
        </div>
    );
}

// ── PARENT ──
 function UserProfile() {
    return (
        <div className="profiles-wrapper">
            <h1 className="profiles-title">Props Demo</h1>

            {/* prop by prop */}
            <Welcome username="Iserveu" age={10} />

            {/* object spread */}
            <Child {...data} />

            {/* destructure with default — no prop passed */}
            <DestructureSample />
        </div>
    );
}

export default UserProfile;