import React, { useState, useEffect} from 'react';
import './dailyTask.css'

export default function DailyTask(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div classname="dailyTask-component">
            <div className="dailyTask">
                <h1 className="dailyTask-head">Daily Tasks</h1>
                <p className="dailyTask-date">{currentTime.toLocaleDateString()}</p>
            </div>
        </div>
    )
}