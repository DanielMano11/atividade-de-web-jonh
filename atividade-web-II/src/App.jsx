import { useState } from 'react';
import Header from './components/Header';
import TaskSummary from './components/TaskSummary';
import TaskList from './components/TaskList';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar frontend - ', concluida: false },
    { id: 2, titulo: 'Fazer ativide de Jonh - ', concluida: true },
    { id: 3, titulo: 'Jogar Valorant - ', concluida: false },
    { id: 4, titulo: 'Ajudar a mãe - ', concluida: false }
  ]);

  const handleToggleTask = (id) => {
    setTarefas(tarefas.map((t) => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const handleDeleteTask = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;
  const pendentes = total - concluidas;

  return (
    <div>
      <Header titulo="Estude Cara" subtitle="Faça suas tarefas comigo!!!" />
      <TaskSummary
        total={total}
        concluidas={concluidas}
        pendentes={pendentes}
      />
      <TaskList
        tarefas={tarefas}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
