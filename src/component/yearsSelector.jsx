import React, { useEffect, useMemo } from "react";
import dayjs from "../utils/date";

function YearsSelector(props) {
  const { date, onSelectDate } = props;

  function generateYears() {
    const years = [];
    for (let i = 1301; i < 1500; i++) {
      years.push(i);
    }
    return years;
  }

  const handleClick = (key) => {
    onSelectDate(dayjs(date ? date : new Date()).year(key));
  };

  return (
    <div className="year-container">
      {generateYears().map((name, index) => (
        <button
          key={index}
          className={dayjs(date).year() === name ? "selected" : ""}
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default YearsSelector;
