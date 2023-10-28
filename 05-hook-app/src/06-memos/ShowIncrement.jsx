import React from "react";


/*
    Caso de uso: console log, se vuelve a ejecutar cada vez que se increment el contador
    esto no se puede resolver como memo, ya que el parametro que se envía es una función
    y en javascript, las funciones y Objetos cambian de espacio de memoría, aunque se pase la misma 
    función es como si se estuviera mandando otro valor, por lo tanto se renderiza nuevamente

    NOTA: hay que memorizar componente TAMBIEN, aparte del callback

*/

export const ShowIncrement = React.memo(
    ({ increment }) => {
        console.log('Me volví a generar');
      return (
        <button
            className="btn btn-outline-primary"
            onClick={()=>{
                increment();
            }}
        >
            Incrementar
        </button>
      );
    }
);

