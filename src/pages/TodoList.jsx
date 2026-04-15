import "../assets/TodoList.css";

const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a Todo App" },
    { id: 3, task: "Master useState" },
    { id: 4, task: "Deploy to Production" },
];

// ── Demo: map array to UI ──
function MapDemo() {
    return (
        <div className="demo-box">
            <p className="section-label">map() Demo</p>
            <ul className="demo-list">
                {todos.map((item) => (
                    // key is mandatory — React uses it to track which item changed
                    <li key={item.id} className="demo-item">
                        #{item.id} — {item.task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ── Exercise: Todo List with Delete button ──
function TodoList() {
    return (
        <div className="demo-box">
            <p className="section-label">Todo List</p>
            <ul className="todo-list">
                {todos.map((item) => (
                    <li key={item.id} className="todo-item">
                        <div className="todo-left">
                            <span className="todo-id">#{item.id}</span>
                            <span className="todo-task">{item.task}</span>
                        </div>
                        <button className="delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ── Parent ──
 function TodoListDetails() {
    return (
        <div className="wrapper">
            <h1 className="page-title">Lists & Keys</h1>
            <MapDemo />
            <TodoList />
        </div>
    );
}

export default TodoListDetails;