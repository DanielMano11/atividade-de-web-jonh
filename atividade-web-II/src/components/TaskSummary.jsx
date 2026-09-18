

const TaskSummary = ({ total, concluidas, pendentes }) => {
  return (
    <div>
      <div>
        <h3>Total - {total}</h3>
      </div>
      <div>
        <h3>Concluidas - {concluidas}</h3>
      </div>
      <div>
        <h3>Pendentes - {pendentes}</h3>
      </div>
    </div>
  );
}

export default TaskSummary;
