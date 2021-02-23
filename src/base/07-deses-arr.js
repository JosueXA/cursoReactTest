const personajes = ['Goku','Vegeta','Trunks'];
const [ , ,p3 ] = personajes;

export const retronaArreglo = () => {
  return ['ABC', 123];
}

// const [ letras, numeros ] = retronaArreglo();

const usState = (valor) => {
  return [valor, ()=>{ console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = usState('Goku');
