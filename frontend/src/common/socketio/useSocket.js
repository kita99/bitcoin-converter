import socketIOClient from 'socket.io-client';

const socket = socketIOClient('localhost:8000');

const useSocket = () => socket;

export default useSocket;
