//DAY1 : TASK2 : Re-structure to follow pattern


function Input({ placeholder, value, onChange, type = "text" }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid #1e2d3d",
                background: "#0f1c2a",
                color: "#cce0f5",
                fontSize: 14,
                fontFamily: "'Syne', sans-serif",
                outline: "none",
            }}
        />
    );
}

export default Input;