import { useState } from 'react';
import { ToastNotifications } from './ToastNotifications';

// Display1 que muestra el selector de tiempo y un botón de inicio
export default function Display1({ startTimer }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Para iniciar el temporizador
    const handleStart = () => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds; // Seleccionamos el tiempo y se guarda en la vairable totalSecounds
        if (totalSeconds <= 0) {
            ToastNotifications.notifyError(); // Muestra el toast de error solo una vez
            return;
        }
        ToastNotifications.notifyStart();
        startTimer(totalSeconds);
    };

    // Función para manejar el scroll en los inputs
    const handleWheel = (e, value, setter, max) => {
        e.preventDefault(); // Evita el comportamiento del scroll por defecto
        let delta = e.deltaY;
        let newValue = value;

        if (delta < 0) {
            // Scroll hacia arriba, incrementa el valor
            newValue = value + 1;
            if (newValue > max) {
                newValue = 0;
            }
        } else {
            // Scroll hacia abajo, decrementa el valor
            newValue = value - 1;
            if (newValue < 0) {
                newValue = max;
            }
        }
        setter(newValue);
    };

    return (
        <div className="space-y-20 border shadow-xl rounded-[2rem] p-6 sm:p-10 sm:space-y-10 md:rounded-[4rem] centered max-w-md mx-auto">
            <div className="flex space-x-10 sm:space-x-16 justify-center">
                {/* Contenedor de las horas */}
                <div className="text-center flex flex-col justify-center items-center">
                    <label className="label text-lg sm:text-2xl">Hours: </label>
                    <div className="h-16 w-16 sm:h-24 sm:w-24">
                        <input
                            type="tel"
                            className="selector w-full text-center"
                            value={hours.toString().padStart(2, '0')}
                            onChange={(e) => {
                                let returnValue = Number(e.target.value);
                                if (returnValue > 99) {
                                    returnValue = 0;
                                } else if (returnValue < 0) {
                                    returnValue = 99;
                                }
                                setHours(returnValue);
                            }}
                            onWheel={(e) => handleWheel(e, hours, setHours, 99)}
                        />
                    </div>
                </div>

                {/* Contenedor de los minutos */}
                <div className="text-center flex flex-col justify-center items-center">
                    <label className="label text-lg sm:text-2xl">Minutes: </label>
                    <div className="h-16 w-16 sm:h-24 sm:w-24">
                        <input
                            type="tel"
                            className="selector w-full text-center"
                            value={minutes.toString().padStart(2, '0')}
                            onChange={(e) => {
                                let returnValue = Number(e.target.value);
                                if (returnValue > 59) {
                                    returnValue = 0;
                                } else if (returnValue < 0) {
                                    returnValue = 59;
                                }
                                setMinutes(returnValue);
                            }}
                            onWheel={(e) => handleWheel(e, minutes, setMinutes, 59)}
                        />
                    </div>
                </div>

                {/* Contenedor de los segundos */}
                <div className="text-center flex flex-col justify-center items-center">
                    <label className="label text-lg sm:text-2xl">Seconds: </label>
                    <div className="h-16 w-16 sm:h-24 sm:w-24">
                        <input
                            type="tel"
                            className="selector w-full text-center"
                            value={seconds.toString().padStart(2, '0')}
                            onChange={(e) => {
                                let returnValue = Number(e.target.value);
                                if (returnValue > 59) {
                                    returnValue = 0;
                                } else if (returnValue < 0) {
                                    returnValue = 59;
                                }
                                setSeconds(returnValue);
                            }}
                            onWheel={(e) => handleWheel(e, seconds, setSeconds, 59)}
                        />
                    </div>
                </div>
            </div>

            {/* Botón de inicio */}
            <button
                onClick={handleStart}
                className="btn btn-outline btn-success btn-lg !text-xl sm:!text-3xl px-8 sm:px-10 w-full sm:w-auto">
                Start
            </button>
        </div>
    )
}
