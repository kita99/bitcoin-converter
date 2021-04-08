import socketIOClient from 'socket.io-client';

const socket = socketIOClient('localhost:3000');

const useSocket = () => socket;

export default useSocket;
