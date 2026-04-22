import { io } from 'socket.io-client';

const RAILWAY_URL = 'https://chatifying-server-production.up.railway.app';

const URL = process.env.NODE_ENV === 'production' ? RAILWAY_URL : 'http://localhost:3000';

export const socket = io(URL, {
    auth: {
        serverOffset: 0,
        ackTimeout: 10000,
        retries: 3,
    },
    withCredentials: true 
});