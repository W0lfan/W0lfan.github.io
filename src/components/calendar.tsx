import { useState } from 'react';
import './calendar.scss';



const getLocalStorage = () => {
    const t = localStorage.getItem('time_working');
    if (t) {
        return JSON.parse(t);
    } else {
        localStorage.setItem('time_working', JSON.stringify({}));
    }
    return {};
}




const Calendar = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = ["M", "T", "W", "T", "F", "S", "S"];

    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();

    


    return (
        <div className="year">
            {months.map((month, monthIndex) => {
                const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
                const firstDayOfMonth = new Date(currentYear, monthIndex, 1).getDay();
                const adjustedFirstDay = (firstDayOfMonth + 6) % 7; // Adjust to start week on Monday

                return (
                    <div key={monthIndex} className="month">
                        <div className={`month-name ${currentMonth === monthIndex ? 'current' : ''}`}>
                            {month}
                        </div>
                        <div className="days-list">
                            {days.map((day, dayIndex) => (
                                <div key={`${monthIndex}-${dayIndex}`} className="day-name">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="days">
                            {Array.from({ length: adjustedFirstDay }).map((_, emptyIndex) => (
                                <div key={`empty-${monthIndex}-${emptyIndex}`} className="day placeholder"></div>
                            ))}
                            {Array.from({ length: daysInMonth }, (_, dayIndex) => {
                                const isPast = new Date(currentYear, monthIndex, dayIndex + 1) < new Date(currentYear, currentMonth, currentDay);
                                return (
                                    <div
                                        key={`day-${monthIndex}-${dayIndex}`}
                                        id={`day-${monthIndex + 1}-${dayIndex + 1}`}
                                        className={`day ${currentDay === dayIndex + 1 && currentMonth === monthIndex ? 'current' : ''} ${isPast ? 'past' : ''}`}
                                        onClick={() => {
                                            setH(hoursOfWork[days[(dayIndex + adjustedFirstDay) % 7]]);
                                            setD(`${monthIndex + 1}-${dayIndex + 1}`);
                                        }}
                                    >
                                        {dayIndex + 1}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Calendar;
