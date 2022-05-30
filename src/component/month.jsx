import React from "react";
import dayjs from "../utils/date";
import DaysOfWeek from "./daysOfWeek";
import Day from "./day";
import "../styles/calendar.scss";

function Month(props) {
  const { min, max, selectedDay, selectDate, date } = props;

  const handleClick = (day) => {
    selectDate(day);
  };

  const renderDays = () => {
    const activeMonth = dayjs(date).month();

    let startDate = dayjs(date).startOf("Month").startOf("week");
    const end = dayjs(date).endOf("Month").endOf("week");

    const minDate = max ? dayjs(min).startOf("day") : null;
    const maxDate = min ? dayjs(max).endOf("day") : null;
    let days = [];
    while (startDate.isBefore(end)) {
      const dayKey = startDate.format("YYYY/MM/DD");
      if (
        (minDate && startDate.isBefore(minDate)) ||
        (maxDate && startDate.isAfter(maxDate)) ||
        startDate.month() !== activeMonth
      ) {
        days.push({
          key: dayKey,
          disabled: true,
          date: dayjs(startDate),
          selected: dayjs(startDate).isSame(selectedDay, "day"),
        });
      } else {
        days.push({
          key: dayKey,
          disabled: false,
          date: dayjs(startDate),
          selected: dayjs(startDate).isSame(selectedDay, "day"),
        });
      }

      startDate = startDate.add(1, "days");
    }
    return days.map((day) => {
      return (
        <Day
          key={day.key}
          day={day.date}
          disabled={day.disabled}
          selected={day.selected}
          onClick={() => handleClick(day.date)}
        />
      );
    });
  };

  return (
    <div className="days-container">
      <DaysOfWeek />
      {renderDays()}
    </div>
  );
}

export default Month;
