/*const { exec } = require('child_process');

exec('code -n', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al abrir la terminal desde front: ${error}`);
    return;
  }
  console.log(`Terminal desde front abierta exitosamente: ${stdout}`);

  // Comando para cambiar de directorio y ejecutar 'npm start'
  const commandToExecute = 'cd front && npm start';

  // Ejecuta el comando en la nueva terminal después de un retraso
  setTimeout(() => {
    exec(`code -g --exec "${commandToExecute}"`, (error2, stdout2, stderr2) => {
      if (error2) {
        console.error(`Error al ejecutar el comando front en la nueva terminal: ${error2}`);
        return;
      }
      console.log(`Comando front ejecutado exitosamente en la nueva terminal: ${stdout2}`);
    });
  }, 2000); // Cambia el valor del retraso según sea necesario
});*/

/*const { exec } = require('child_process');

// Ruta completa a la terminal de Node.js Command Prompt
const nodeCommandPromptPath = '"C:\\Program Files\\nodejs\\node.exe"';// o nodevars.bat

// Comando para cambiar de directorio y ejecutar 'npm start'
const commandToExecute = `${nodeCommandPromptPath} && cd front && npm start --watch`;

exec(commandToExecute, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando front: ${error}`);
    return;
  }
  console.log(`Comando front ejecutado exitosamente en la nueva terminal: ${stdout}`);
});*/

const { exec } = require('child_process');

// Comando para cambiar de directorio y ejecutar 'npm start'
const commandToExecute = 'start node && cd front && npm start --wacht';

exec(commandToExecute, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando front: ${error}`);
    return;
  }
  console.log(`Comando front ejecutado exitosamente en la nueva terminal: ${stdout}`);
});
