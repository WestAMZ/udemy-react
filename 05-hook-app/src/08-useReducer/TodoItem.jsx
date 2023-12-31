
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    const { id, description, done } = todo;
  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
        <span 
          role='button'
          className={`align-self-center ${done ? 'text-decoration-line-through' :''}`}
          onClick={ ()=> onToggleTodo(id) }
        >
          {description}</span>
        <button 
          className="btn btn-outline-danger"
          onClick={ ()=>{
            onDeleteTodo(id);
          }}
        >Borrar</button>
    </li>
  )
}

