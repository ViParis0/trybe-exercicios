import './App.css';

// const Task = ({ value }) => {
//   console.log(value);
//   return (
//     <li>{value}</li>
//   );
// }

const tarefas = ['acordar', 'jogar', 'tomar cafe', 'almoçar', 'tomar banho', 'ir para aula', 'dormir']

function App() {
  const task = (value, index) => {
    return (
      <li key={index}>{value}</li>
    );
  }

  return (
     <div className="App">

      <h1>Hello world!</h1>
      {tarefas.map((tarefa, index) => task(tarefa, index))}

     </div>
  );
}

export default App;
