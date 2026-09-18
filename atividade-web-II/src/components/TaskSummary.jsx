

const TaskSummary = ({ total, concluidas, pendentes }) => {
  return (
    <div>
      <div>
        <h3>Total</h3>
        <p>{total}</p>
      </div>
      <div>
        <h3>Concluidas</h3>
        <p>{concluidas}</p>
      </div>
      <div>
        <h3>Pendentes</h3>
        <p>{pendentes}</p>
      </div>
    </div>
  );
}

export default TaskSummary;
