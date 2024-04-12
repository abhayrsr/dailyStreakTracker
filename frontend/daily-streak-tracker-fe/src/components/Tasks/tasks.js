import { useState } from 'react';
import './tasks.css';

export default function Tasks() {
    const [text, setText] = useState('');
    const [newText, setNewText] = useState(''); // Separate state for newHandleChange
    const [tasks, setTasks] = useState([]);
    const [editTaskId, setEditTaskId] = useState(null);

    function handleChange(e) {
        setText(e.target.value);
    }

    function newHandleChange(e) {
        setNewText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function addTasks() {
        setTasks(prevTasks => {
            const newTasks = {
                id: tasks.length + 1,
                task: text,
                completed: false
            };
            return [...prevTasks, newTasks];
        });

        setText('');
    }

    function handleDelete(id) {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.filter((task) => task.id !== id);
            return updatedTasks.map((task, index) => ({
                ...task,
                id: index
            }));
        });
    }

    function handleTaskChange(id) {
        setTasks(prevTasks => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        });
    }

    function cancelEdit(){
        setEditTaskId(null)
    }

    function editTask(task) {
        if (task.id === editTaskId) {
            return (
                <div>
                    <input
                        type="text"
                        value={newText}
                        onChange={newHandleChange}
                    />
                    <button onClick={cancelEdit}>Cancel</button> {/* Button to cancel editing */}
                </div>
            );
        } else {
            return <span>{task.task}</span>;
        }
    }

    function handleEdit(id) {
        setEditTaskId(id);
    }

    function handleKey(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTasks();
        }
    }

    return (
        <div className='task-container'>
            <form className="tasks" onSubmit={handleSubmit}>
                <div className="enter-tasks">
                    <input
                        className='input-tasks'
                        type="text"
                        maxLength="70"
                        name="text"
                        value={text}
                        placeholder="enter the tasks (- max 70 characters)"
                        onChange={handleChange}
                        onKeyDown={handleKey}
                    />
                    <button
                        className="add-button"
                        type="button"
                        onClick={addTasks}
                    >
                        +
                    </button>
                </div>

                {tasks.length !== 0 ?
                    <ul className="tasks">
                        {tasks.map((task) => (
                            <li key={task.id} className='added-tasks'>
                                <input
                                    key={task.id}
                                    className='checkbox-tasks'
                                    value={task.task}
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={(e) => handleTaskChange(task.id)} />
                                <span>{task.task}</span>
                                <button
                                    key={task.id}
                                    className='edit-button'
                                    onClick={() => { handleEdit(task.id) }}>
                                    /
                                </button>
                                <button
                                    key={task.id}
                                    className='delete-button'
                                    onClick={() => handleDelete(task.id)} >
                                    -
                                </button>
                            </li>
                        ))}
                    </ul>
                    : <div> </div>
                }
            </form>
            {editTaskId !== null &&
                <div className="blur-background"></div>
            }
        </div>
    )
}
