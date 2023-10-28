import { useState } from "react"
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    // const [todo, setTodo] = useState({
    //     id: new Date().getTime(),
    //     description: '',
    //     done: false,
    // });

    // const onInputChange = ({ target }) =>{
    //     const { value } = target;

    //     setTodo((state) => ({ ...state, description: value}));
    // }

    const { description , onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) =>{
        event.preventDefault();

        const newTodo = {
            id: new Date().getTime() * 3,
            description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <form 
        onSubmit={ onFormSubmit }
    >
        <input 
            type="text" 
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            value={ description }
            onChange={ onInputChange }
            name="description"
        />
        <button className="btn btn-outline-primary mt-2" type="submit">
            Agregar
        </button>
    </form>
  )
}
