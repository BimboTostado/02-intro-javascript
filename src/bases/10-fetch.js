const apiKey = 'yJyZPLum1MQh7MiRRN03jGWTf2viSNpX';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//promesas en cadena. resp devuelve una promesa

peticion
    .then( resp => resp.json())
    .then( ({ data }) => { 
        //primer forma que explico
        //console.log( data.images.original.url )
        //mediante desectraucturacion 
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );