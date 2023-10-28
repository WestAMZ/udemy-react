
export const TodoItem = ({ todo, onDeleteTodo }) => {
    const { id, description, done } = todo;
  return (
    <li key={id} className={`list-group-item d-flex justify-content-between ${done && 'border border-info'}`}>
        <span className="align-self-center">{description}</span>
        <button 
          className="btn btn-outline-danger"
          onClick={ ()=>{
            onDeleteTodo(id);
          }}
        >Borrar</button>
    </li>
  )
}

