import "./efficiency.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Efficiency({efficiency}) {
  let formattedNumber = 0;

  const percentage = (efficiency);
  formattedNumber = parseFloat(percentage.toFixed(1));

  return (
    <div className="efficiency">
      <h1 className="name">Efficiency</h1>
      <div className="circularProgressBar">
        <CircularProgressbar value={formattedNumber} text={`${formattedNumber}%`} styles={buildStyles({ pathColor: `#0D99FF`,
    textColor: '#f88',})} />
        ;
      </div>
    </div>
  );
}
