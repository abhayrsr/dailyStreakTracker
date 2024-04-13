import { useState } from 'react';
import Popup from 'reactjs-popup';
import './tasks.css';

export default function Tasks() {
    const [text, setText] = useState('');
    const [newText, setNewText] = useState(''); 
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show);
    }


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


    function editTask(id) {
        console.log(newText)
    
       setTasks(prevTasks => {
        return prevTasks.map((task) => {
            if(task.id === id){
                return { ...task, task: newText };
            }
            return task;
        })
       })
       setNewText('');
       setShow(false);
    }

    function handleEdit(id) {
      
        const taskToEdit = tasks.find(task => task.id === id);
        console.log(taskToEdit)
        if (taskToEdit) {
            setNewText(taskToEdit.task);
        }
        setShow(true);
    }

    function handleKey(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTasks();
        }
    }

    return (
      <div className="task-container">
        <form className="tasks" onSubmit={handleSubmit}>
          <div className="enter-tasks">
            <input
              className="input-tasks"
              type="text"
              maxLength="70"
              name="text"
              value={text}
              placeholder="enter the tasks (- max 70 characters)"
              onChange={handleChange}
              onKeyDown={handleKey}
            />
            <button className="add-button" type="button" onClick={addTasks}>
              +
            </button>
          </div>

          {tasks.length !== 0 ? (
            <ul className="tasks">
              {tasks.map((task) => (
                <li key={task.id} className="added-tasks">
                  <input
                    key={task.id}
                    className="checkbox-tasks"
                    value={task.task}
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => handleTaskChange(task.id)}
                  />
                  <span>{task.task}</span>
                  <Popup
                    trigger={ <button
                        key={task.id}
                        className="edit-button"
                        onClick={() => {
                          handleEdit(task.id);
                        }}
                      >
                        /
                      </button>}
                    position="center"
                  >
                  {show &&  <div>
                    <input
                        className='popup-input'
                        key={task.id}
                        type="text"
                        value={newText} 
                        onChange={newHandleChange}
                    />
                     <button className='popup-button' key={task.id} onClick={() =>{editTask(task.id); handleShow();}}>save</button>
                    </div>}
                  
                  </Popup>
                  <button
                    key={task.id}
                    className="delete-button"
                    onClick={() => handleDelete(task.id)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div> </div>
          )}
        </form>
      </div>
    );
}
