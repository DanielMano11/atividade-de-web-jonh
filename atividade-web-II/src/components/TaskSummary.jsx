const TaskSummary = ({ total, concluidas, pendentes }) => {
  return (
    <div style={{
      display: "flex",
      gap: "16px",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        flex: 1,
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#002f5e",
        textAlign: "center"
      }}>
        <h4 style={{ margin: "0 0 8px 0", color: "#fff" }}>Total</h4>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>{total}</span>
      </div>

      <div style={{
        flex: 1,
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#002f5e",
        textAlign: "center"
      }}>
        <h4 style={{ margin: "0 0 8px 0", color: "#009b00" }}>Concluídas</h4>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>{concluidas}</span>
      </div>
      <div style={{
        flex: 1,
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#002f5e",
        textAlign: "center"
      }}>
        <h4 style={{ margin: "0 0 8px 0", color: "#ff0101" }}>Pendentes</h4>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>{pendentes}</span>
      </div>
    </div>
  );
}

export default TaskSummary;