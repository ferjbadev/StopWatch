import React, { useState } from 'react';

// Display1 que muestra el selector de tiempo y un botón de inicio
export default function Display1({ startTimer }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleStart = () => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds > 0) {
            startTimer(totalSeconds); // Llama a la función del padre para iniciar el temporizador
        } else {
            alert('Selecciona un tiempo válido');
        }
    };

    return (
        <div className="flex flex-col space-y-10 items-center justify-center centered ">
            <div className="flex space-x-20">
                <div className="relative">
                    <label className="label">Hours: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="selector"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="label">Minutes: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={minutes}
                            onChange={(e) => setMinutes(Number(e.target.value))}
                            className="selector"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="label">Seconds: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={seconds}
                            onChange={(e) => setSeconds(Number(e.target.value))}
                            className="selector"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleStart}
                className="btn">
                Start
            </button>
        </div>
    );
}
