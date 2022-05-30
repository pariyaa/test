import React, { useRef } from "react";
import dayjs from "../utils/date";
import { useState } from "react";
import Calender from "./calendar";
import "../styles/datepicker.scss";
import { useOnClickOutside } from "../utils/hook";

function DatePciker(props) {
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  function handleFocus() {
    setOpen(true);
  }

  function handleSelectValue(value) {
    setInputValue(value);
    setOpen(false);
  }

  const renderInput = () => {
    return (
      <input
        type="text"
        onFocus={handleFocus.bind(this)}
        value={inputValue}
      />
    );
  };
  return (
    <div ref={ref} className="datepicker-container">
      {renderInput()}
      {isOpen && (
        <Calender
          min={dayjs()}
          max={{}}
          selectedValue={inputValue}
          onSelectValue={handleSelectValue}
        />
      )}
    </div>
  );
}

export default DatePciker;
