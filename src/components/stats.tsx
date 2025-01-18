import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

const getLocalStorage = () => {
    const t = localStorage.getItem('time_working');
    if (t) {
        return JSON.parse(t);
    } else {
        localStorage.setItem('time_working', JSON.stringify({}));
    }
    return {};
}

const updateLocalStorageInMilliseconds = (date, time) => {
    const t = getLocalStorage();
    if (t[date]) {
        t[date] += time;
    } else {
        t[date] = time;
    }
    localStorage.setItem('time_working', JSON.stringify(t));
}

interface StatsProps {
    update: boolean;
    setUpdate: Dispatch<SetStateAction<boolean>>;
}

const Stats: React.FC<StatsProps> = ({ update, setUpdate }) => {

    const [loc, setLoc] = useState(getLocalStorage());

    const times = {
        "30mn" : 30 * 60 * 1000,
        "1h" : 60 * 60 * 1000,
        "2h" : 2 * 60 * 60 * 1000,
        "3h" : 3 * 60 * 60 * 1000,
        "4h" : 4 * 60 * 60 * 1000,
    }

    useEffect(() => {
        if (update) {
            setLoc(getLocalStorage());
            setUpdate(false);
        }
    }, [update]);

    return (
        <div className="stats-container">
            <div className="stats-content">
                <div className="stats-row">
                    <div className="stats-row-title">Total Time Worked</div>
                    <div className="stats-row-content">
                        {(Object.keys(loc).reduce((acc, key) => acc + loc[key], 0) / (1000 * 60 * 60)).toFixed(2)} hours
                    </div>
                </div>
                <div className="stats-row">
                    <div className="stats-row-title">Days Worked</div>
                    <div className="stats-row-content">
                        {Object.keys(loc).length}
                    </div>
                </div>
                <div className="stats-row">
                    <div className="stats-row-title">Average Time Worked</div>
                    <div className="stats-row-content">
                        {Object.keys(loc).length > 0 ? (Object.keys(loc).reduce((acc, key) => acc + loc[key], 0) / Object.keys(loc).length / (1000 * 60 * 60)).toFixed(2) : 0} hours
                    </div>
                </div>
            </div>
            <div className="stats-buttons" style={{
                display: "none"
            }}>
                {Object.keys(times).map(time => (
                    <button key={time} onClick={() => {
                        const date = new Date().toISOString().split('T')[0];
                        updateLocalStorageInMilliseconds(date, times[time]);
                        setLoc(getLocalStorage());
                    }}>{time}</button>
                ))}
            </div>
        </div>
    )
}

export { getLocalStorage, updateLocalStorageInMilliseconds };
export default Stats;