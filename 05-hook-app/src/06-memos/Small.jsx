// otra forma de usar el memo
//import React from 'react';
import { memo } from 'react'


// Envolviendo componente en memo, solo cuando el parametro enviado cambia, se vuelve a redibujar el componente (y ejecutar su código interno)

// otra forma de usar el memo
// export const Small = React.memo(({ value }) => {
export const Small = memo(({ value }) => {
    console.log('Componente se generó nuevamente');
  return (
    <small>{ value }</small>
  )
});
