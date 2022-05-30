import { daysName } from "../utils/constants";

function DaysOfWeek() {

  const dayOfWeekNames = daysName();
  
  return (
    <div className="days-name-container">
      {dayOfWeekNames.map((name, key) => (
        <span key={key}>{name}</span>
      ))}
    </div>
  );
}


export default DaysOfWeek;