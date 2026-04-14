import { socket } from '../../socket';

const ManageConnection = () => {

  const onConnect = () => {
    console.log('Conectado');
  };

  const onDisconnect = () => {
    console.log('Desconectado');
  };

  const handleConection = (con) => {
    switch (con) {
      case 'on':
        socket.on('connect', onConnect);
        break;

      case 'off':
        socket.on('disconnect', onDisconnect);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={() => handleConection('on')}>Connect</button>
      <button onClick={() => handleConection('off')}>Disconnect</button>
    </div>
  );
};

export default ManageConnection;