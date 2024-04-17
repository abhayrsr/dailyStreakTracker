import { useState, useEffect } from 'react';
import Efficiency from '../Efficiency/efficiency';
import './tasks.css';
import Heatmap from '../Buttons/heatmapButton/heatmap';

export default function Tasks() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(0);
    const [numberOfTasksCompleted, setNumberOfTasksCompleted] = useState(0);
    const [efficiency, setEfficiency] = useState(0);
    console.log("effeciency"+efficiency);
    console.log("taskCompleted" + numberOfTasksCompleted)

    function handleTaskCompletion(){
      const numberOfTasksCompleted = tasks.filter((task) => task.completed === true).length;
      setNumberOfTasksCompleted(numberOfTasksCompleted);
      
    }

    function handleEfficiency(){
      const numberOfTasks = tasks.length;
      const numberOfTasksDone = tasks.filter((task) => task.completed === true).length;
      
      let efficiency = (numberOfTasksDone/numberOfTasks)*100;
      if (isNaN(efficiency)) {
        efficiency = 0;
      }
      setEfficiency(efficiency);
    }

    function handleChange(e) {
        setText(e.target.value);
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
        if(editId){
          const taskToEdit = tasks.find((task) => {
            return task.id === editId
          })

          const updatedTasks = tasks.map((task) => {
           return task.id === taskToEdit.id ? {...task, task: text} : task
          })
          setTasks(updatedTasks);
          setEditId(0);
          return;
        }
        
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

    useEffect(() => {
      handleEfficiency();
      handleTaskCompletion();
  }, [tasks]);

    function handleEdit(id) {
      
        const taskToEdit = tasks.find(task => task.id === id);
        setText(taskToEdit.task);
        setEditId(id);
        
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
                  <button
                        key={task.id}
                        className="edit-button"
                        onClick={() => {
                          handleEdit(task.id);
                        }}
                      >
                        /
                      </button>
                 
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
        <div className="save-button-component">
          {/* <button className="save-button"
            onClick={handleTaskChange}
          >
            save
          </button> */}
        </div>
        <div className="efficiency-component">  <Efficiency efficiency={efficiency}/> </div>
        <div className="heatmap-component"> < Heatmap taskCompleted={numberOfTasksCompleted}/></div>
      </div>
    );
}
