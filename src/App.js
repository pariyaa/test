import './App.css';
import Calender from './component/calendar';
import DatePciker from './component/datePicker';

function App() {
  return (
    <div className='container'>
      {/* used as calender */}
      <Calender />

      {/* used as datepicker */}
      <DatePciker />
    </div>
  );
}

export default App;
