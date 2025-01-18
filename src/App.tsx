import { useEffect, useState } from 'react';
import Calendar from './components/calendar';
import Stats from './components/stats';
import StartWorkingSession from './components/startWorkingSession';

function App() {
  const january1st2025 = new Date(2025, 0, 1);
  const december31st2025 = new Date(2025, 11, 31);

  const [
    update, setUpdate
  ] = useState(false);

  // Calculate the total seconds in the year
  const totalSecondsInYear = Math.floor(
    (december31st2025.getTime() - january1st2025.getTime()) / 1000
  );

  // Initialize the counter with elapsed time since Jan 1st, 2025
  const [counter, setCounter] = useState(() => {
    const now = Date.now();
    return now >= january1st2025.getTime()
      ? Math.floor((now - january1st2025.getTime()) / 1000)
      : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const counterFormat = (c) => {
    const months = Math.floor(c / (30.44 * 24 * 60 * 60)); // Average days in a month
    const days = Math.floor((c % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((c % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((c % (60 * 60)) / 60);
    const seconds = Math.floor(c % 60);

    let formatted = '';
    if (months > 0) formatted += `${months} month${months > 1 ? 's' : ''}, `;
    if (days > 0) formatted += `${days} day${days > 1 ? 's' : ''}, `;
    if (hours > 0) formatted += `${hours} hour${hours > 1 ? 's' : ''}, `;
    if (minutes > 0) formatted += `${minutes} minute${minutes > 1 ? 's' : ''}, `;
    formatted += `${seconds} second${seconds > 1 ? 's' : ''}`;
    return formatted;
  };

  const timeLeftInSeconds =
    december31st2025.getTime() > Date.now()
      ? Math.floor((december31st2025.getTime() - Date.now()) / 1000)
      : 0;

  return (
    <>
      <div className="tiles">
        <StartWorkingSession setUpdate={setUpdate} />
        <div className="tile">
          <div className="tile-header">
            <div className="tile-title">Time Spent</div>
            <div className="tile-content">{counterFormat(counter)}</div>
          </div>
          <div className="tile-percentage">
            {counter > 0
              ? `${((counter / totalSecondsInYear) * 100).toFixed(2)}%`
              : ''}
          </div>
        </div>
        <div className="tile">
          <div className="tile-header">
            <div className="tile-title">Time Left</div>
            <div className="tile-content">{counterFormat(timeLeftInSeconds)}</div>
          </div>
          <div className="tile-percentage">
            {timeLeftInSeconds > 0
              ? `${((timeLeftInSeconds / totalSecondsInYear) * 100).toFixed(2)}%`
              : '0%'}
          </div>
        </div>
        <Stats update={update} setUpdate={setUpdate} />
      </div>
      <Calendar />
      <button className='clear-storage' onDoubleClick={() => {
        if (confirm('Are you sure you want to clear local storage?')) {
          localStorage.clear();
          setUpdate(true);
          alert('Local storage cleared');
        } else {
          alert('Local storage was not cleared');
        }
      }}>Clear Local Storage</button>

    </>
  );
}

export default App;
