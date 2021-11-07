import './App.css';

const tasks = [
  'estudar o conteúdo do dia',
  'assistir à aula ao vivo',
  'fazer os exercícios',
  'descansar',
];

const Tasks = () => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

function App() {
  return <Tasks />;
}

export default App;
