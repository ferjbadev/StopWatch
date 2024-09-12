import React, { useState } from 'react';

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
        <div className="flex flex-col space-y-10 items-center justify-center centered">
            <div className="flex space-x-20">
                <div className="relative">
                    <label className="block text-3xl text-center mb-7">Hours: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="border p-2 w-full h-full text-center rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-3xl text-center mb-7">Minutes: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={minutes}
                            onChange={(e) => setMinutes(Number(e.target.value))}
                            className="w-full h-full p-2 text-center rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-3xl text-center mb-7">Seconds: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={seconds}
                            onChange={(e) => setSeconds(Number(e.target.value))}
                            className="w-full h-full p-2 text-center rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
    );
}
