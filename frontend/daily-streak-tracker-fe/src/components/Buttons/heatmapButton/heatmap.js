import { useState } from "react";
import Popup from "reactjs-popup";
import CalendarHeatmap from "react-calendar-heatmap";
import Select from "react-select";
import "react-calendar-heatmap/dist/styles.css";
import "reactjs-popup/dist/index.css";
import "./heatmap.css";

let yearSelection = new Date();

const options = [
  { value: yearSelection.getFullYear(), label: yearSelection.getFullYear() },
  { value: yearSelection.getFullYear() - 1, label: yearSelection.getFullYear() - 1 },
  { value: yearSelection.getFullYear() - 2, label: yearSelection.getFullYear() - 2 },
];

export default function Heatmap({taskCompleted}) {
  const [timeRange, setTimeRange] = useState(new Date().getFullYear())
  const popupContentStyle = {
    background: "rgb(27 23 23)",
    width: "80vw",
  };

  console.log("heatmap" + taskCompleted);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();

  if(dd < 10){
    dd = '0' + dd;
  }

  if(mm < 10){
    mm = '0' + mm;
  }

  const date = yyyy + '-' + mm + '-' + dd;

  return (
    <div className="button-component">
      <div className="button-heatmap">
        <Popup
          trigger={<button className="text-heatmap"> Heatmap </button>}
          position="top left center"
          contentStyle={popupContentStyle}
          modal
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              {/* <div className="header"> Heatmap </div> */}
              <div classsName="drop-down">
                {" "}
                <Select
                  options={options}
                  defaultValue={options[0]}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: '6vw',
                      position: 'static',
                    }),
                  }}
                />{" "}
              </div>
              <div className="content">
                <div className="calendar-heatmap-component">
                  <CalendarHeatmap
                    startDate={new Date(timeRange, 0, 1)}
                    endDate={new Date(timeRange, 11, 31)}
                    values={[
                      { date: date, count: taskCompleted },
                    ]}
                    classForValue={(value) => {
                      if (!value) {
                        return "color-empty";
                      }
                      else if(value.count >= 4){
                        return `color-github-4`;
                      }
                      return `color-github-${value.count}`;
                      // return `color-filled`;
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
