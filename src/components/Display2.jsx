import React, { useEffect, useState } from 'react';

export default function Display2({ totalTimer, isRunning, onTimerFinish, stopTimer, continueTimer }) {
    const [timeLeft, setTimeLeft] = useState(totalTimer);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (timeLeft === 0) {
            alert('Time is Over!!');
            onTimerFinish(); // Llama la función cuando termina el temporizador
        }
    }, [isRunning, timeLeft, onTimerFinish]);

    const formatTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="counter">
            {timeLeft > 0 ? (
                <h1 className="coundown">{formatTime(timeLeft)}</h1>
            ) : (
                <h1 className="coundown">00:00:00</h1>
            )}
            <div className="column">
                <button style={{ backgroundColor: '#007bff' }} className="botons" onClick={onTimerFinish}>Back</button>
                <button style={{ backgroundColor: 'red' }} className="botons" onClick={stopTimer}>Stop</button>
                <button style={{ backgroundColor: 'green' }} className="botons" onClick={continueTimer}>Resume</button>
            </div>
        </div >
    );
}
