import "../assets/index.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";
import Input from "../components/common/Input";


//DAY1 : TASK2 : Re-structure to follow pattern

function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Navbar />

            <main style={{ flex: 1, padding: "32px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                <Input placeholder="Type something..." />
                <div style={{ display: "flex", gap: 12 }}>
                    <Button label="Primary" variant="primary" />
                    <Button label="Secondary" variant="secondary" />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;