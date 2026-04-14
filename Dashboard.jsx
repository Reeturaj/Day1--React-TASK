
// Dashboard Component (Parent)
function Dashboard() {
  return (
    <>
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.contentArea}>
        <MainContent />
        <StatusFooter />
      </div>
    </div>
    </>
  );
}


// Main Content Component
function MainContent() {
  return (
    <div style={styles.main}>
      <h1>Welcome to Dashboard</h1>
      <p>This is your main content area.</p>
    </div>
  );
}

// Footer Component
function StatusFooter() {
  return (
    <div style={styles.footer}>
      <p>Status: Connected ✅</p>
    </div>
  );
}

// Sidebar Component
function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>Menu</h3>
      <ul style={styles.menu}>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}


// Styles
const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    width: "220px",
    background: "#2c3e50",
    color: "white",
    padding: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  main: {
    flex: 1,
    padding: "20px",
    background: "#f4f6f8",
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  footer: {
    background: "#ddd",
    padding: "10px",
    textAlign: "center",
  },
};


export default Dashboard;