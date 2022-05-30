import React from "react";
import { monthName } from "../utils/constants";
import dayjs from "../utils/date";

function MonthsSelector(props) {
  const { date, onSelectDate } = props;

  const handleClick = (key) => {
    onSelectDate(dayjs(date ? date : new Date()).month(key));
  };

  return (
    <div className="month-container">
      {monthName().map((name, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default MonthsSelector;
