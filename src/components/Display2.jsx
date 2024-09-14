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
            <button style={{ backgroundColor: '#007bff' }} className="botons" onClick={onTimerFinish}>
                Delele
            </button>

            <button onClick={toggleTimer} className={`toggleBoton ${isRunning ? 'bg-red-500' : 'bg-green-500'}`}>
                {isRunning ? 'Pause' : 'Resume'}
            </button>

            <button style={{ backgroundColor: 'purple' }} className="botons" onClick={toggleMusic}>
                {isPlaying ? 'Unmute' : 'Mute'}     
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
