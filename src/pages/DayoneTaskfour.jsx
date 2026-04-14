import "../assets/DayoneTaskfour.css";

//DAY1 : TASK4 :Create a JSX element that displays the current year using a JavaScript new Date() object inside curly braces {}
function DayoneTaskfour() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleString("default", { month: "long" });
    const day = now.getDate();

    return (
        <div className="year-wrapper">
            <div className="year-card">
                <p className="year-label">Current Year</p>
                <h1 className="year-title">{year}</h1>
                <p className="year-sub">
                    Today is <strong>{month} {day}, {year}</strong>
                </p>
            </div>
        </div>
    );
}

export default DayoneTaskfour;