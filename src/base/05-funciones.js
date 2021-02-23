// Funciones JS
/*
const saludar = function saludar(nombre) {
  return `Hola ${ nombre }`;
}
*/

const saludar2 = (nombre) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Josué'));

export const getUser = () => ({
    uid:'ABCV123',
    username: 'El_Papi1502'
});

export const getUsuarioActivo = ( nombre ) => ({
  uid:'ABC567',
  username: nombre
});
