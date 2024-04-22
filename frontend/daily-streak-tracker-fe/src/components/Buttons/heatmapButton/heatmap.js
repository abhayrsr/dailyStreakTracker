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
  {
    value: yearSelection.getFullYear() - 1,
    label: yearSelection.getFullYear() - 1,
  },
  {
    value: yearSelection.getFullYear() - 2,
    label: yearSelection.getFullYear() - 2,
  },
];

export default function Heatmap({ taskCompleted }) {
  const [timeRange, setTimeRange] = useState(new Date().getFullYear());
  const popupContentStyle = {
    background: "rgb(27 23 23)",
    width: "80vw",
  };

  console.log("heatmap" + taskCompleted);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  const date = yyyy + "-" + mm + "-" + dd;

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
                      width: "6vw",
                      position: "static",
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
                      { date: "2024-04-01", count: 1 },
                      { date: "2024-04-02", count: 4 },
                      { date: "2024-04-03", count: 2 },
                      { date: "2024-04-04", count: 1 },
                      { date: "2024-04-05", count: 4 },
                      { date: "2024-04-06", count: 2 },
                      { date: "2024-04-07", count: 1 },
                      { date: "2024-04-08", count: 4 },
                      { date: "2024-04-09", count: 2 },
                      { date: "2024-04-10", count: 1 },
                      { date: "2024-04-11", count: 4 },
                      { date: "2024-04-12", count: 2 },
                      { date: "2024-04-13", count: 1 },
                      { date: "2024-04-14", count: 4 },
                      { date: "2024-04-15", count: 2 },
                      { date: "2024-04-16", count: 1 },
                      { date: "2024-04-17", count: 4 },
                      { date: "2024-04-18", count: 2 },
                      { date: "2024-04-19", count: 1 },
                      { date: "2024-04-20", count: 4 },
                      { date: "2024-04-21", count: 2 },
                      { date: "2024-04-22", count: 1 },
                      { date: "2024-04-23", count: 4 },
                      { date: "2024-04-24", count: 2 },
                      { date: "2024-06-01", count: 1 },
                      { date: "2024-06-02", count: 4 },
                      { date: "2024-06-03", count: 2 },
                      { date: "2024-06-04", count: 1 },
                      { date: "2024-06-05", count: 4 },
                      { date: "2024-06-06", count: 2 },
                      { date: "2024-06-07", count: 1 },
                      { date: "2024-06-08", count: 4 },
                      { date: "2024-06-09", count: 2 },
                      { date: "2024-06-10", count: 1 },
                      { date: "2024-06-11", count: 4 },
                      { date: "2024-06-12", count: 2 },
                      { date: "2024-06-13", count: 1 },
                      { date: "2024-06-14", count: 4 },
                      { date: "2024-06-15", count: 2 },
                      { date: "2024-06-16", count: 1 },
                      { date: "2024-06-17", count: 4 },
                      { date: "2024-06-18", count: 2 },
                      { date: "2024-06-19", count: 1 },
                      { date: "2024-06-20", count: 4 },
                      { date: "2024-06-21", count: 2 },
                      { date: "2024-06-22", count: 1 },
                      { date: "2024-06-23", count: 4 },
                      { date: "2024-06-24", count: 2 },
                      { date: "2024-08-01", count: 1 },
                      { date: "2024-08-02", count: 4 },
                      { date: "2024-08-03", count: 2 },
                      { date: "2024-08-04", count: 1 },
                      { date: "2024-08-05", count: 4 },
                      { date: "2024-08-06", count: 2 },
                      { date: "2024-08-07", count: 1 },
                      { date: "2024-08-08", count: 4 },
                      { date: "2024-08-09", count: 2 },
                      { date: "2024-08-10", count: 1 },
                      { date: "2024-08-11", count: 4 },
                      { date: "2024-08-12", count: 2 },
                      { date: "2024-08-13", count: 1 },
                      { date: "2024-08-14", count: 4 },
                      { date: "2024-08-15", count: 2 },
                      { date: "2024-08-16", count: 1 },
                      { date: "2024-08-17", count: 4 },
                      { date: "2024-08-18", count: 2 },
                      { date: "2024-08-19", count: 1 },
                      { date: "2024-08-20", count: 4 },
                      { date: "2024-08-21", count: 2 },
                      { date: "2024-08-22", count: 1 },
                      { date: "2024-08-23", count: 4 },
                      { date: "2024-08-24", count: 2 },
                      { date: "2024-10-01", count: 1 },
                      { date: "2024-10-02", count: 4 },
                      { date: "2024-10-03", count: 2 },
                      { date: "2024-10-04", count: 1 },
                      { date: "2024-10-05", count: 4 },
                      { date: "2024-10-06", count: 2 },
                      { date: "2024-10-07", count: 1 },
                      { date: "2024-10-08", count: 4 },
                      { date: "2024-10-09", count: 2 },
                      { date: "2024-10-10", count: 1 },
                      { date: "2024-10-11", count: 4 },
                      { date: "2024-10-12", count: 2 },
                      { date: "2024-10-13", count: 1 },
                      { date: "2024-10-14", count: 4 },
                      { date: "2024-10-15", count: 2 },
                      { date: "2024-10-16", count: 1 },
                      { date: "2024-10-17", count: 4 },
                      { date: "2024-10-18", count: 2 },
                      { date: "2024-10-19", count: 1 },
                      { date: "2024-10-20", count: 4 },
                      { date: "2024-10-21", count: 2 },
                      { date: "2024-10-22", count: 1 },
                      { date: "2024-10-23", count: 4 },
                      { date: "2024-10-24", count: 2 },
                      { date: "2024-12-01", count: 1 },
                      { date: "2024-12-02", count: 4 },
                      { date: "2024-12-03", count: 2 },
                      { date: "2024-12-04", count: 1 },
                      { date: "2024-12-05", count: 4 },
                      { date: "2024-12-06", count: 2 },
                      { date: "2024-12-07", count: 1 },
                      { date: "2024-12-08", count: 4 },
                      { date: "2024-12-09", count: 2 },
                      { date: "2024-12-10", count: 1 },
                      { date: "2024-12-11", count: 4 },
                      { date: "2024-12-12", count: 2 },
                      { date: "2024-12-13", count: 1 },
                      { date: "2024-12-14", count: 4 },
                      { date: "2024-12-15", count: 2 },
                      { date: "2024-12-16", count: 1 },
                      { date: "2024-12-17", count: 4 },
                      { date: "2024-12-18", count: 2 },
                      { date: "2024-12-19", count: 1 },
                      { date: "2024-12-20", count: 4 },
                      { date: "2024-12-21", count: 2 },
                      { date: "2024-12-22", count: 1 },
                      { date: "2024-12-23", count: 4 },
                      { date: "2024-12-24", count: 2 },
                      { date: "2024-01-01", count: 1 },
                      { date: "2024-01-02", count: 4 },
                      { date: "2024-01-03", count: 2 },
                      { date: "2024-01-04", count: 1 },
                      { date: "2024-01-05", count: 4 },
                      { date: "2024-01-06", count: 2 },
                      { date: "2024-01-07", count: 1 },
                      { date: "2024-01-08", count: 4 },
                      { date: "2024-01-09", count: 2 },
                      { date: "2024-01-10", count: 1 },
                      { date: "2024-01-11", count: 4 },
                      { date: "2024-01-12", count: 2 },
                      { date: "2024-01-13", count: 1 },
                      { date: "2024-01-14", count: 4 },
                      { date: "2024-01-15", count: 2 },
                      { date: "2024-01-16", count: 1 },
                      { date: "2024-01-17", count: 4 },
                      { date: "2024-01-18", count: 2 },
                      { date: "2024-01-19", count: 1 },
                      { date: "2024-01-20", count: 4 },
                      { date: "2024-01-21", count: 2 },
                      { date: "2024-01-22", count: 1 },
                      { date: "2024-01-23", count: 4 },
                      { date: "2024-01-24", count: 2 },
                      // { date: date, count: taskCompleted },
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
