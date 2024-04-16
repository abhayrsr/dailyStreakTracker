import Popup from "reactjs-popup";
import CalendarHeatmap from "react-calendar-heatmap";
import Select from "react-select";
import "react-calendar-heatmap/dist/styles.css";
import "reactjs-popup/dist/index.css";
import "./heatmap.css";

const options = [
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

export default function Heatmap() {
  const popupContentStyle = {
    background: "rgb(27 23 23)",
    width: "80vw",
  };
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
                    startDate={new Date("2024-01-01")}
                    endDate={new Date("2024-12-31")}
                    values={[
                      { date: "2024-01-01", count: 1 },
                      { date: "2024-01-03", count: 4 },
                      { date: "2024-01-06", count: 2 },
                      { date: "2024-02-01", count: 1 },
                      { date: "2024-03-03", count: 4 },
                      { date: "2024-05-06", count: 2 },
                      { date: "2024-07-01", count: 1 },
                      { date: "2024-07-02", count: 4 },
                      { date: "2024-07-03", count: 2 },
                      // ...and so on
                    ]}
                    classForValue={(value) => {
                      if (!value) {
                        return "color-empty";
                      }
                      // return `color-scale-${value.count}`;
                      return `color-filled`;
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
