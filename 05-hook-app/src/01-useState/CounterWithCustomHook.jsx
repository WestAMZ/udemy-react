import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter} </h1>
        <hr />
        {/* 
            en caso de ser una función sin parámetro el siguiente código funciona, en caso contrario se pasa como primer parametro event
            lo que hace necesario pasar explicito el parametro a usar (ya que no queremos el event de parametro)
            <button className="btn btn-outline-primary" onClick={ increment }>+1</button> 
        */}
        <button className="btn btn-outline-primary" onClick={ ()=> increment(2) }>+1</button>
        <button className="btn btn-outline-dark" onClick={ reset }>Reset</button>
        <button className="btn btn-outline-danger" onClick={ ()=> decrement(2) }>-1</button>
    </>
  )
}
