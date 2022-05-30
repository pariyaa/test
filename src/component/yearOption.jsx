import dayjs from "dayjs";
import React from "react";
import { leftArrow, rightArrow } from "../utils/assets";

function YearOption(props) {
  const { date, onSelectDate, setMode } = props;

  const onNextYear = () => {
    onSelectDate(dayjs(date ? date : new Date()).add(1, "year"));
  };

  const onPrevYear = () => {
    if (date) onSelectDate(dayjs(date ? date : new Date()).subtract(1, "year"));
  };

  return (
    <div className="years-option">
      <button
        type="button"
        title={"سال قبل"}
        onClick={onPrevYear}
        dangerouslySetInnerHTML={rightArrow}
        className="right-arrow arrow"
      />
      <button onClick={() => setMode("year")}>
        {date ? dayjs(date).year() : dayjs().year()}
      </button>
      <button
        type="button"
        title={"سال بعد"}
        onClick={onNextYear}
        dangerouslySetInnerHTML={leftArrow}
        className="left-arrow arrow"
      />
    </div>
  );
}

export default YearOption;
