import { useState } from 'react'
import './tasks.css'
let id  = 0;

export default function Tasks(){
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);
    

    function handleChange(e){
        setText(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault();
    }

    function addTasks(){
        console.log(id)
        setTasks((prevTasks) => {
          const newTasks = {
            id: id,
            task: text,
            completed: false
          };
          id++;
          return [...prevTasks, newTasks]
        })
        
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

    function handleTaskChange(id){
      setTasks(prevTasks => {
       return  prevTasks.map((task) => {
          if(task.id === id){
            return {...task, completed: !task.completed}
          }
          return task;
        })
      })
    }

    function handleEdit(id){
        setTasks()
    }

    function handleKey(e){
        if(e.key === "Enter"){
            e.preventDefault();
            addTasks();
        }
    }

    return(
        <form className="tasks" onSubmit={handleSubmit}>
            <div className="enter-tasks">
                <input
                    className='input-tasks' 
                    type="text"
                    maxlength="70"
                    name="text"
                    value={text}
                    placeholder="enter the tasks(- max 70 characters)"
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

           {
            tasks.length !== 0 ? 
                <ul className="tasks"> 
                    {tasks.map((task) => (
    
                            <li key={task.id} className='added-tasks'>
                            <input 
                                key={task.id}
                                className='checkbox-tasks'
                                value={task.task}
                                type="checkbox"
                                checked={task.complete}
                                onChange={(e) => handleTaskChange(task.id)} />
                            {task.task}
                            <button 
                                className='edit-button'
                                onClick={() => handleEdit(task.id)}>
                                /
                            </button>
                            <button 
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
    )
}