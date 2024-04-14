import "./heatmap.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {useState} from 'react';

export default function Heatmap() {
    const [date, setDate] = useState(new Date());
    const streakData = [
        false, false, false, true, true, true, true, true, true, false, true, true,
        true, true, true, false, false, false, true, true, true, true, true, true,
        true, true, true, true, true, true,
      ];

    function handleClick(value){
        console.log(value);
        alert('New date is: '+ value)
    }

    function getTileContent({date, view}){
        if(view === 'month'){
            const day = date.getDate();
            const isCompleted = streakData[day-1];
            
            return(
            <div>

            </div>
            )
        }
    }
  return (
    <div className="heatmap">
      <h1 className="name">Heatmap</h1>
      <div className="calendar">
        <Calendar 
            value={date}
            onChange={() => handleClick(date)}
            tileContent={getTileContent}
            maxDate={date}
        />
      </div>
      
    </div>
  );
}
