import { useState } from 'react';
import toast,{ Toaster } from 'react-hot-toast';
import { ToastNotifications } from './ToastNotifications';


// Display1 que muestra el selector de tiempo y un botón de inicio
export default function Display1({ startTimer }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);   
    const [seconds, setSeconds] = useState(0);   
    
    // Para iniciar el temporizador
    const handleStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds <= 0) {
        ToastNotifications.notifyError(); // Muestra el toast de error solo una vez
        return;
    }
    ToastNotifications.notifyStart();
    startTimer(totalSeconds);
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
                                    }}/>
                    </div>
                </div>

                {/* //Contenedor de los minutos */}
                <div className="">
                    <label className="label">Minutes: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            className="selector"
                            value={minutes.toString().padStart(2, '0')}
                            onChange={(e) => {
                                let returnValue = Number(e.target.value);
                                    if (returnValue > 59) {
                                        returnValue = 0;
                                    } else if (returnValue < 0) {
                                        returnValue = 59;
                                    }
                                    setMinutes(returnValue);
                                    }}/>
                    </div>
                </div>

                {/* //Contenedor de los segundos */}
                <div className="">
                    <label className="label">Seconds: </label>
                    <div className="h-24 w-24">
                        <input
                            type="number"
                            className="selector"
                            value={seconds.toString().padStart(2, '0')}
                            onChange={(e) => {
                                let returnValue = Number(e.target.value);
                                    if (returnValue > 59) {
                                        returnValue = 0;
                                    } else if (returnValue < 0) {
                                        returnValue = 59;
                                    }
                                    setSeconds(returnValue);
                                    }}/>
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
