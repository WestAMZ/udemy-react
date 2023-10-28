import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description : 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime()*3,
    //     description : 'Recolectar la piedra del tiempo',
    //     done: true,
    // }
];

const init = () =>{
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) =>{
        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

  return (
    <>
        <h1>TodoApp ( { todos.length } ) <small>Pendientes: { todos.filter(x=>!x.done).length } </small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo = { handleToggleTodo }/>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                < TodoAdd onNewTodo={ handleNewTodo } />
            </div>
        </div>
    </>
  )
}
