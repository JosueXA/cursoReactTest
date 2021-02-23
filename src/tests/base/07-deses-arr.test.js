import { retronaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desesetructuración', () => {

  test('retronaArreglo debe de retornar un string y un número', () => {

    const [ letras, numeros ] = retronaArreglo(); // ['ABC', 123]

    expect( letras ).toBe( 'ABC' );
    expect( typeof letras ).toBe( 'string' );

    expect( numeros ).toBe( 123 );
    expect( typeof numeros ).toBe( 'number' );
    
  });
  
  
});
