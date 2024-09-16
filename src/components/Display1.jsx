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
        <div className="space-y-20 border shadow-xl rounded-[4rem] centered ">
            <div className="flex space-x-20">
                {/* Contenedor de las horas */}
                <div className="text-center flex flex-col justify-center items-center">
                    <label className="label">Hours: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            className="selector"
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
                    <label className="label">Minutes: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            className="selector mx-auto"
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
                    <label className="label">Seconds: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            className="selector mx-auto"
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

            {/* Boton de inicio */}
            <button onClick={handleStart} className="btn btn-outline btn-success btn-lg !text-3xl px-10">
                Start
            </button>
        </div>
    );
}
