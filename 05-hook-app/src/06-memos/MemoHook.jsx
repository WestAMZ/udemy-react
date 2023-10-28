
import { useState, useMemo } from 'react';
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber=100) =>{
    for(let i=0; i<iterationNumber; i++)
    {
        console.log('Ahi vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`
}

/*
    Caso de uso, heavyStuff se estará ejecutando cada vez que haya un cambio de estado,
    en este caso nos interesaría que se ejecuté si cambia counter ya que es el parametro que se le pasa
    en caso contrarío no, entonces queremos evitar que se vuelva a ejecutar heavyStuff()
    si fue show el estado que cambió, usando useMemo

*/


export const MemoHook = () => {

    const {counter, increment} = useCounter( 4000 );
    const [show, setShow] = useState( true );

    // Use memo memoriza un valor, y no cambiará a no ser que la dependecia cambie
    const memorizedValue = useMemo(()=>{ heavyStuff(counter) },[counter]);

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />

        {/* 
            antes de usar useMemo, función se llamaba directamente con cada cambio de estado
            <h4>{ heavyStuff( counter ) }</h4> 
        */}

        <h4>{memorizedValue}</h4>

        <button 
            className='btn btn-outline-primary'
            onClick={ ()=> { increment() }}
        >
            +1
        </button>

        <button 
            className='btn btn-outline-secondary'
            onClick={ ()=> setShow(!show) }
        >
            Show/ Hide { JSON.stringify( show ) }
        </button>
    </>
  )
}
