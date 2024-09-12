import React, { useEffect, useState } from 'react';

export default function Display2({ totalTimer, isRunning, onTimerFinish }) {
    const [timeLeft, setTimeLeft] = useState(totalTimer);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (timeLeft === 0) {
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
        <div className="mt-10 text-center">
            {timeLeft > 0 ? (
                <h1 className="text-4xl font-bold">{formatTime(timeLeft)}</h1>
            ) : (
                <h1 className="text-4xl font-bold">00:00:00</h1>
            )}
        </div>
    );
}
