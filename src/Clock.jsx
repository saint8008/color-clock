import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './Clock.css';

function Clock() {
    // Initialize state with current date time 
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // setup timer to update state every second
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // clean up timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    const currentSeconds = time.getSeconds();

    const isApproachingNewMinute = currentSeconds >= 50 && currentSeconds

    return (
        <div className="clock-container">
            <h2 className={`clock-time ${isApproachingNewMinute ? 'warning' : ''}`}>
                {format(time, 'HH:mm:ss')}
            </h2>

            <p className="clock-date">
                {format(time, 'eeee, MMMM dd, yyyy')}
            </p>
        </div>
    );
}

export default Clock;