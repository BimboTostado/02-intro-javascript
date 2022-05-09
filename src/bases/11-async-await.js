//declaracion que antes usambamos
//const getImagenPromesa = () => new Promise ( resolve =>('https://unaurl.com') )
//getImagenPromesa().then( console.log );

//utilizando async
//const getImagen = async() => {
//    return 'https://asdasdasdadasd.com';
//}

//getImagen().then( console.log );

const getImagen = async() => {
    try{

        const apiKey = 'yJyZPLum1MQh7MiRRN03jGWTf2viSNpX';
        const respuesta =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await respuesta.json()
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    }catch (error){
        //manejo del error
        console.error(error)
    }
}

getImagen();