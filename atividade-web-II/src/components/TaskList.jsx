
import TaskItem from './TaskItem';

const TaskList = ({ tarefas, onToggle, onDelete }) => {
  const pendentes = tarefas.filter(t => !t.concluida).length;
  const todasConcluidas = tarefas.filter(t => t.concluida).length;

  return (
    <div>
      {tarefas.length > 0 ? (
        pendentes > 0 ? (
          <p>Ainda tem coisa para tu fazer em</p>
        ) : todasConcluidas && (
          <p>AI SIM! todas as tarefas foram concluídas!</p>
        )
      ) : (
        <div>
          Nenhuma tarefa cadastrada.
        </div>
      )}
      <br />
      <div>
        {tarefas.map(tarefa => (
          <TaskItem
            key={tarefa.id}
            tarefa={tarefa}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
