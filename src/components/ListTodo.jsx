import "./ListTodo.css";
import { useState } from "react";

export default function ListTodo() {
    const dummyData = [
        {
            id: 1,
            title: "Learn Java Core",
            description: "Learn Java with real-world examples and challenges.",
            completed: false,
        },
        {
            id: 2,
            title: "Master React",
            description: "Build SPAs and explore hooks, context, and router.",
            completed: true,
        },
    ];

    const [todos, setTodos] = useState(dummyData);

    return (
        <div className="page">
            <h1>🚀 Your Personal TODO Command Center</h1>
            <table className="todo-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>✔</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td className={todo.completed ? "completed" : ""}>{todo.title}</td>
                        <td className={todo.completed ? "completed" : ""}>{todo.description}</td>
                        <td style={{ color: todo.completed ? "var(--success)" : "var(--danger)" }}>
                            {todo.completed ? "✔" : "✖"}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
