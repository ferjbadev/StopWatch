import React, { useState, useEffect } from 'react';

export default function Display1() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [totalTimer, setTotalTimer] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning && totalTimer > 0) {
            interval = setInterval(() => {
                setTotalTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (totalTimer === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, totalTimer]);

    const handleStart = () => {
        const timerReconds = hours * 3600 + minutes * 60 + seconds;
        if (timerReconds > 0) {
            setTotalTimer(timerReconds);
            setIsRunning(true);
        } else {
            // Si el tiempo es 0, muestra un mensaje de alerta
            alert('Seleciona un tiempo mayor a 0');
        }
    };

    const formatTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col space-y-10 items-center justify-center centered">
            <div className="flex space-x-20">
                <div className="relative">
                    <label className="block text-3xl text-center mb-7">Hours: </label>
                    <div className="h-24 w-24">
                        <input
                            type='number'
                            value={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="border p-2 w-full h-full p-2 text-center rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-3xl text-center mb-7">Minutes: </label>
                    <div className="h-24 w-24">
                        <input
                            type='number'
                            value={minutes}
                            onChange={(e) => setMinutes(Number(e.target.value))}
                            className="w-full h-full p-2 text-center rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-3xl text-center mb-7">Seconds: </label>
                    <div className="h-24 w-24">
                        <input
                            type='number'
                            value={seconds}
                            onChange={(e) => setSeconds(Number(e.target.value))}
                            className="w-full h-full p-2 text-center rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={handleStart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-16 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Start
            </button>
            {isRunning && totalTimer !== 0 && (
                <div>
                    <h1>{formatTime(totalTimer)}</h1>
                </div>
            )}
        </div>
    );
};
