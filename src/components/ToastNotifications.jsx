import toast from 'react-hot-toast';

export const ToastNotifications = {
    // Notificacion para iniciar el temporizador
    notifyTimeOver: () => toast.success('Time is Over!', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#0dcc5d',
        }
    }),

    // Notificacion para reanudar el temporizador
    notifyResume: () => toast.success('The time is Resumed!', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#0dcc5d',
        }
    }),

    // Notificacion para parar el temporizador
    notifyStop: () => toast.error('The time is Stopped', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#cc0d20',
        }
    }),

    // Notificacion para pausar la musica
    notifyPauseMusic: () => toast.error('Music is Paused', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#cc0d20',
        }
    }),

    // Notificacion de que la musica fue activada
    notifyStartMusic: () => toast.success('Music is Playing!', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#0dcc36',
        }
    }),

    // Notificacion para seleccionar un tiempo mayor a 0
    notifyError: () => toast.error('Select a time greater than 0', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#cc390d',
        }
    }),

    // Notificacion para iniciar el temporizador
    notifyStart: () => toast.success('Timer started!', {
        duration: 3000,
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#4CAF50',
        }
    }),
}
