//DAY1 : TASK2 : Re-structure to follow pattern


function Navbar() {
    return (
        <header style={{
            padding: "12px 24px",
            background: "rgba(9,15,27,.97)",
            borderBottom: "1px solid #141f2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg,#6C63FF,#43D9AD)",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18,
            }}>⬡</div>
            <span style={{ color: "#e0eaf5", fontWeight: 800, fontSize: 17 }}>Demo App</span>
        </header>
    );
}

export default Navbar;