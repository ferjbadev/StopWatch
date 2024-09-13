import React, { useState } from 'react';
import Display1 from './Display1';
import Display2 from './Display2';

// Componente principal que se encarga de mostrar Display1 y Display2
export default function TimerApp() {
    const [showDisplay2, setShowDisplay2] = useState(false);
    const [totalTimer, setTotalTimer] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    // Inicia el temporizador
    const startTimer = (timeInSeconds) => {
        setTotalTimer(timeInSeconds);
        setIsRunning(true);
        setShowDisplay2(true); // Muestra Display2 y oculta Display1
    };

    // Detiene el temporizador
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Continua el temporizador
    const continueTimer = () => {
        setIsRunning(true);
    };

    const TimerFinish = () => {
        setShowDisplay2(false); // Vuelve a mostrar Display1
        setIsRunning(false); // Reinicia el estado de ejecución
    };

    return (
        <div>
            {!showDisplay2 ? (
                <Display1
                    startTimer={startTimer} />
            ) : (
                <Display2
                    totalTimer={totalTimer}
                    isRunning={isRunning}
                    onTimerFinish={TimerFinish}
                    stopTimer={stopTimer}
                    continueTimer={continueTimer} />
            )}
        </div>
    );
}
