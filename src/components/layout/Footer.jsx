//DAY1 : TASK2 : Re-structure to follow pattern


function Footer() {
    return (
        <footer style={{
            padding: "12px 24px",
            background: "rgba(9,15,27,.97)",
            borderTop: "1px solid #141f2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <p style={{ fontSize: 13, color: "#43D9AD", fontFamily: "'JetBrains Mono', monospace" }}>
                Status: Connected ✅
            </p>
        </footer>
    );
}

export default Footer;