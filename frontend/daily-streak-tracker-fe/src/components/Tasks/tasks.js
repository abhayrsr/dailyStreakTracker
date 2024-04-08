import './tasks.css'

export default function Tasks(){
    return(
        <div className="tasks">
            <div>
                <input
                    className='input-tasks' 
                    type="text"
                    name="text"
                    value="text"
                    placeholder="enter the tasks"
                    />
                <button>
                    +
                </button>
            </div>
        </div>
    )
}