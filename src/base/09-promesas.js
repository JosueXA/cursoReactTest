import { getHeroeById } from './08-imp-exp';

/*
const promesa = new Promise( (resolve, reject) => {
  setTimeout(() => {
    const p1 = getHeroeById(2);
    resolve(p1);
    //reject('No se pudo encotrar el héroe');;
  }, 2000);
});
promesa.then( (heroe) => {
  console.log('heroe', heroe);
})
.catch( err => console.warn(err) );
*/

export const getHeroeByIdAsync = ( id ) => {

  return new Promise( (resolve, reject) => {

    setTimeout(() => {
  
      const p1 = getHeroeById(id);
      //console.log(p1);
      if(p1) {
        resolve(p1);
      } else {
        reject('No se pudo encotrar el héroe');
      }

      
  
    }, 1500);

  
  });

}
