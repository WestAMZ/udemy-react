import { useFetch, useCounter } from "../hooks/";


const LoadingComponent = ()=> {
  return (
    <div className="alert alert-info text-center">
      Loading...
    </div>
  );
} 

const CardItem = (data)=>{
  const { forms, sprites, types } =  data;
  console.log({ forms, sprites, types });
  return (
    <div className="card bg-light" style={{width: '18rem'}}>
      <img src={ sprites?.front_default } alt="pokemon sprite" className="card-img-top bg-white"/>
      <div className="card-body">
        <h5 className="card-title">{ forms[0]?.name }</h5>
        <div className="d-flex p-2">
          {
            types.map((item,index)=>{
              console.log({item,index})
              return (
                <span className={`badge me-2 bg-${item.type.name} p-2`} key={`type-${index}`}>{ item.type.name }</span>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1,1);
  const {data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  // const { forms, sprites, types } = !!data && data;

  return (
    <>
        <h1>Pokemons</h1>
        <hr/>

      {
        isLoading  ? <LoadingComponent /> : <CardItem {...data} />
      }

      <button className="btn btn-outline-primary mt-2" onClick={()=>{ decrement(1) }} disabled={isLoading}>
        Previous Pokemon
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={()=>{ increment(1) }} disabled={isLoading}>
        Next Pokemon
      </button>

    </>
  )
}
