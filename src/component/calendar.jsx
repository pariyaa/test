import React, { useState } from "react";
import dayjs from "../utils/date";
import "../styles/calendar.scss";
import Month from "./month";
import MonthsSelector from "./monthsSelector";
import YearsSelector from "./yearsSelector";
import YearOption from "./yearOption";
import MonthOption from "./monthOption";

function Calender(props) {
  const { selectedValue  , onSelectValue} = props;
  const [date, setDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs(selectedValue ? selectedValue : new Date(), { jalali: true }));
  const [mode, setMode] = useState("day");

  const handleSelection = value => {
    setDate(value);
    setMode('day')
  };

  const handleSelectDate = value => {
    setSelectedDay(value);
    if(onSelectValue){
      onSelectValue(dayjs(value).format('YYYY/MM/DD'));
    }
  }

  function RenderCalender() {
    switch (mode) {
      case "day":
        return (
          <>
          <div className="options-container">
            <MonthOption
              onSelectDate={handleSelection}
              date={date || selectedDay}
              setMode={setMode}
            />
            <YearOption
              onSelectDate={handleSelection}
              date={date || selectedDay}
              setMode={setMode}
            />
            </div>
            <Month
              date={date || selectedDay || dayjs()}
              selectedDay={selectedDay}
              selectDate={handleSelectDate}
              {...props}
            />
          </>
        );
      case "month":
        return <MonthsSelector onSelectDate={handleSelection} date={date} />;
      case "year":
        return <YearsSelector onSelectDate={handleSelection} date={date} />;
      default:
        break;
    }
  }

  return (
    <div className="calendar-container">
      {RenderCalender()}  
    </div>
  );
}

export default Calender;
