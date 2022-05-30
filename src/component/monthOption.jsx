import dayjs from "dayjs";
import React from "react";
import { leftArrow, rightArrow } from "../utils/assets";
import { monthName } from "../utils/constants";

function MonthOption(props) {
  const { date, onSelectDate, setMode } = props;
  const months = monthName();

  const onNextMonth = () => {
    onSelectDate(dayjs(date ? date : new Date()).add(1, "month"));
  };

  const onPrevMonth = () => {
    onSelectDate(dayjs(date ? date : new Date()).subtract(1, "month"));
  };

  return (
    <div className="month-option">
      <button
        type="button"
        title={"ماه قبل"}
        onClick={onPrevMonth}
        dangerouslySetInnerHTML={rightArrow}
        className="right-arrow arrow"
      />
      <button onClick={() => setMode("month")}>
        {months[date ? dayjs(date).month() : dayjs().month()]}
      </button>
      <button
        type="button"
        title={"ماه بعد"}
        onClick={onNextMonth}
        dangerouslySetInnerHTML={leftArrow}
        className="left-arrow arrow"
      />
    </div>
  );
}

export default MonthOption;
