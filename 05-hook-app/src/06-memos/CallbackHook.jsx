import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const incrementFather = ()=>{
    //     setCounter( counter + 1 );
    // }

    // UseCallback, permite memorizar funciones
    // nota, los valores pasados tambien estan memorizados, en este caso counter no cambia de valor X
    // setCounter(counter +1);

    // NOTA: importante, si usamos useCallback tambien debemos memorizar el componente al que le pasamos el parametro
    // de esta  forma, el componente y la función memorizada, mientras no  cambie la dependencia no se vuelve a  generar el componente
    const incrementFather = useCallback((value)=>{
        setCounter((c)=>c + value);
    },[]);

    useEffect(()=>{
        // Debido a que estamos memorizando, y el el segundo parámetro de useCallback es [], solo se memoriza una vez
        // por enede la función no cambia y el use effect tampoco se ejecuta varias veces si no una sola (cuando cambia la función memorizada)

        console.log('Cambio el incrementFather');
        incrementFather();
    },[incrementFather])

  return (
    <>
        <h1>UseCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement  increment={ incrementFather(5) } />
    </>
  )
}
