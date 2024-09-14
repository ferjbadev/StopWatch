import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ToastNotifications } from './ToastNotifications';


// Display1 que muestra el selector de tiempo y un botón de inicio
export default function Display1({ startTimer }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Para iniciar el temporizador
    const handleStart = () => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds > 0) { // Verifica si el tiempo es válido
            ToastNotifications.notifyStart();
            startTimer(totalSeconds);
        } else {
            ToastNotifications.notifyError(); // Muestra el toast de error
        }
    };

    // Div para los selectores de tiempo
    return (
        // Contenedor de las horas
        <div className="space-y-20 centered ">
            <div className="flex space-x-20">
                <div className="">
                    <label className="label">Hours: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={hours}
                            onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                            className="selector"
                            min="-0"
                            max="99"
                        />
                    </div>
                </div>

                {/* //Contenedor de los minutos */}
                <div className="">
                    <label className="label">Minutes: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={minutes}
                            onChange={(e) => setMinutes(Math.max(0, Number(e.target.value)))}
                            className="selector"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>

                {/* //Contenedor de los segundos */}
                <div className="">
                    <label className="label">Seconds: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            value={seconds}
                            onChange={(e) => setSeconds(Math.max(0, Number(e.target.value)))}
                            className="selector"
                            min="0"
                            max="99"
                        />
                    </div>
                </div>
            </div>
            {/* Boton de inicio */}
            <button onClick={handleStart} className="btn">
                Start
            </button>
            <Toaster />
        </div>
    );
}
