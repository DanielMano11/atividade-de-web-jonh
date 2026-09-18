

const TaskItem = ({ tarefa, onToggle, onDelete }) => {
  const { id, titulo, concluida } = tarefa;

  return (
    <div>
      <li key={id}>
        <a>{titulo}</a>
        <a>{concluida ? 'Concluida' : 'Pendente'}</a>
      </li>
      <button onClick={() => onToggle(id)}>{concluida ? 'Pendente' : 'Concluir'}</button>
      <button onClick={() => onDelete(id)}>Excluir</button>
    </div >
  );
}

export default TaskItem;
