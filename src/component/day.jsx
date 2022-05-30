function Day(props) {

  const { disabled, selected, day, onClick } = props;
  return (
    <div className="day-container">
    <button  disabled={disabled} className={selected ? "selected" : ""} onClick={() => onClick(day)}>
      {day.format('D')}
    </button></div>
  );
}

export default Day;
