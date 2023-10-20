import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'sampleuser',
        email: 'user@example.com',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) =>{
        const { name, value } = target;
        setFormState({
            ... formState, 
            [ name ]: value
        });
    }

    /* 
        Buena práctica, se recomienda tener useEffects para cambios sobre valores especificos
        teniendo así varios useEffects con acciones especializadas, en lugar de tener uno
        solo con varias funcionalidades, que nos puede causar inconvenientes
    */
    useEffect(()=>{
        //console.log('useEffect called!!');
    },[]);

    useEffect(()=>{
        //console.log('formSate changed!!');
    },[formState]);

    useEffect(()=>{
        //console.log('email changed!!');
    },[email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="text" 
            className="form-control mt-2"
            placeholder="user@domain.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {
            // Usando este tipo de condicion, el componente se monta y desmonta (no se oculta, directamente no existe)
            ( username === 'sampleuser2' ) && <Message />
        }
    </>
  )
}
