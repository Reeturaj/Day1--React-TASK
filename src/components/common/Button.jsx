//DAY1 : TASK2 : Re-structure to follow pattern

function Button({ label, onClick, variant = "primary" }) {
    const styles = {
        primary: { background: "#6C63FF", color: "#fff" },
        secondary: { background: "#0f1c2a", color: "#3d5572" },
    };

    return (
        <button
            onClick={onClick}
            style={{
                ...styles[variant],
                padding: "10px 20px",
                borderRadius: 10,
                border: "1px solid #1e2d3d",
                cursor: "pointer",
                fontSize: 14,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                transition: "all .2s",
            }}
        >
            {label}
        </button>
    );
}

export default Button;