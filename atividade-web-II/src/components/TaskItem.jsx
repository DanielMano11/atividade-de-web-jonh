const TaskItem = ({ tarefa, onToggle, onDelete }) => {
  const { id, titulo, concluida } = tarefa;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      margin: "8px auto",
      width: "98%",
      backgroundColor: "#1e2229",
      border: "1px solid #2f3640",
      borderRadius: "8px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
        <span style={{
          color: concluida ? "#888" : "#f5f6fa",
          fontWeight: "500",
          fontSize: "15px"
        }}>
          {titulo}
        </span>
        <span style={{
          padding: "2px 8px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "bold",
          backgroundColor: concluida ? "#133b22" : "#4a3c11",
          color: concluida ? "#4ae279" : "#f1c40f"
        }}>
          {concluida ? 'Concluída' : 'Pendente'}
        </span>
      </div>

      <div style={{
        display: "flex",
        gap: "8px",
        alignItems: "center"
      }}>
        <button
          onClick={() => onToggle(id)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            fontWeight: "500",
            fontSize: "13px",
            backgroundColor: concluida ? "#2f3640" : "#27ae60",
            color: "#fff",
          }}
        >
          {concluida ? 'Desfazer' : 'Concluir'}
        </button>

        <button
          onClick={() => onDelete(id)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            fontWeight: "500",
            fontSize: "13px",
            backgroundColor: "#c0392b",
            color: "#fff",
          }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default TaskItem;