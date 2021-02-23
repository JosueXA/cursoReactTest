import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {

  test('get User debe de retornar un objeto', () => {

    const userTest = {
      uid:'ABCV123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect( user ).toEqual( userTest );
    
  });

  // getUsuarioActivo debe de retornar un objeto
  test('getUsuarioActivo debe de retornar un objeto', () => {

    const nombre = 'Josué';
    
    const userActive = getUsuarioActivo(nombre);

    expect( userActive ).toEqual({
      uid:'ABC567',
      username: nombre
    });
    
  });
  
});
