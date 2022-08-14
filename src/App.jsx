// import logo from './logo.svg';
import './App.css';
import reactLogo from './imagenes/logo192.png'
import Searcher from './componentes/Searcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de tareas</h1>
        <img src={reactLogo} alt="Logo react" />
      </header>
      <div className='main-container'>
        <h2>Search todo</h2>
        <Searcher />
      </div>
    </div>
  );
}

export default App;
