//const getImagenPromesa = () => new Promise( resolve => resolve('https://hdhjoiunwujas.com') );
//getImagenPromesa().then( console.log );

export const getImagen = async() => {

  try {

    const apiKey = 'q4L98FZEQtLafwg7j1SMNApTGu9i4buu';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await resp.json();
    const {url} = data.images.original;

    return url;
    
  } catch (error) {

    //console.log(error);
    return 'No existe';
    
  }
  
}

getImagen();

/*
peticion
  .then( resp => resp.json())
  .then( ({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
    
  })
  .catch( console.warn );
*/