import { io } from 'socket.io-client';

const URL = 'https://chatifying-server-production.up.railway.app';

export const socket = io(URL, {
    auth: {
        serverOffset: 0,
    },
    withCredentials: true 
});