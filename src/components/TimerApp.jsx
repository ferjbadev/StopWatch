import { useState } from 'react';
import useSound from 'use-sound';
import sonido from '../assets/tictac.mp3';
import Display1 from './Display1';
import Display2 from './Display2';
import { ToastNotifications } from './ToastNotifications';
import { Toaster } from 'react-hot-toast';

export default function TimerApp() {
    const [showDisplay2, setShowDisplay2] = useState(false);
    const [totalTimer, setTotalTimer] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [playMusic, { pause }] = useSound(sonido);
    const [isPlaying, setIsPlaying] = useState(false);

    // Funcione para iniciar el temporizador
    const startTimer = (timeSelected) => {
        if (timeSelected > 0) {
            setTotalTimer(timeSelected);
            setIsRunning(true); //Indica que el temporizador se esta ejecutando
            setShowDisplay2(true); // Muestra el display 2
        }; 
    };

    const toggleTimer = () => {
    if (isRunning) {
        // Si está corriendo, lo pausamos
        ToastNotifications.notifyStop();
        setIsRunning(false);
    } else {
        // Si está detenido, lo reanudamos
        ToastNotifications.notifyResume();
        setIsRunning(true);
    }
};

    // Funcion para alternar la música
    const toggleMusic = () => {
        if (isPlaying) {
            ToastNotifications.notifyPauseMusic(); // Notifica la pausa de la música
            pause(); // Pausa la música
        } else {
            ToastNotifications.notifyStartMusic(); // Notifica el inicio de la música
            playMusic(); // Inicia la música
        }
        setIsPlaying(!isPlaying); // Cambia el estado de la música
    };

    // Funcion para terminar el temporizador
    const TimerFinish = () => {
        ToastNotifications.notifyTimeOver(); // Notifica la finalización del temporizador
        setShowDisplay2(false); // Oculta el display 2
        setIsRunning(false); // Detiene el temporizador
    };

    return (
        <div className="timer-app">
            {!showDisplay2 ? ( // Muestra el display 1 si el showDisplay2 es falso
                <Display1 startTimer={startTimer} /> 
            ) : ( //Muestra el display 2 si es verdadero 
                <Display2
                    totalTimer={totalTimer}
                    isRunning={isRunning}
                    onTimerFinish={TimerFinish}
                    toggleTimer={toggleTimer}
                    toggleMusic={toggleMusic}
                    isPlaying={isPlaying}
                />
            )}                  
            <Toaster />
        </div>
    );
}
