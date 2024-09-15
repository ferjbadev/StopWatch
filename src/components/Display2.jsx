import React, { useEffect, useState } from 'react';

export default function Display2({
    totalTimer,
    isRunning,
    onTimerFinish,
    toggleTimer,
    toggleMusic,
    isPlaying
}) {
    const [timeLeft, setTimeLeft] = useState(totalTimer);

    // Logica del temporalizador que va reduciendo el tiempo
    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(interval); // Limpia el intervalo
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

    // Botones de las funciones 
    const TimerControls = () => (
        <div className="column">
            <button className="btn btn-error btn-lg" onClick={onTimerFinish}>
                Delete
            </button>

            <button onClick={toggleTimer} className={`btn btn-lg ${isRunning ? ' btn-secondary' : 'btn-outline btn-info'}`} >
                {isRunning ? 'Pause' : 'Resume'}
            </button>

            <button className={`btn btn-outline btn-lg ${isPlaying ? 'btn-error' : ' btn-info'}`} onClick={toggleMusic} >
                {isPlaying ? 'Mute' : 'Unmute'}     
            </button>
        </div>
    );

    return (
        <div className="counter">
            <h1 className="coundown">
                {timeLeft > 0 ? formatTime(timeLeft) : '00:00:00'}
            </h1>
            <TimerControls />
        </div>
    );
}
