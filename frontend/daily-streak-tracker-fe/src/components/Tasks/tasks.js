import { useState } from 'react'
import './tasks.css'
let id  = 0;

export default function Tasks(){
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);
    

    function handleChange(e){
        setText(e.target.value)
    }

    function addTasks(){
        console.log(id)
        setTasks([...tasks, {
            id: id,
            task: text,
        }])
        id++;
        setText('');
    }

    function handleDelete(id){
    
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.filter((task) => task.id !== id)

            return updatedTasks.map((task, index) => ({
                ...task,
                id: index
            }))
        })
    }

    function handleEdit(id){
        setTasks()
    }

    function handleKey(e){
        if(e.key === "Enter"){
            addTasks();
        }
    }

    return(
        <div className="tasks">
            <div className="enter-tasks">
                <input
                    className='input-tasks' 
                    type="text"
                    name="text"
                    value={text}
                    placeholder="enter the tasks"
                    onChange={handleChange}
                    onKeyDown={handleKey}
                    />
                <button 
                    className="add-button"
                    onClick={addTasks}
                    >
                    +
                </button>
            </div>

           {
            tasks.length !== 0 ? 
                <ul className="tasks"> 
                    {tasks.map((task) => (
                        <div className='entered-tasks'>
                            <input 
                                className='checkbox-tasks'
                                type='checkbox' />
                            <li key={task.id} className='added-tasks'>
                            {task.task}
                            </li>
                            <button 
                                key={task.id} 
                                className='edit-button'
                                onClick={() => handleEdit(task.id)}>
                                /
                            </button>
                            <button 
                                key={task.id} 
                                className='delete-button'
                                onClick={() => handleDelete(task.id)} >
                                -
                            </button>
                        </div>
                    ))}
                </ul>
        
                : <div> </div>
           }
        </div>
    )
}