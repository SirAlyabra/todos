// import logo from './logo.svg';
import './App.css';
import reactLogo from './imagenes/logo192.png';
import TareasList from './componentes/TareasList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de tareas </h1><img className='reactLogo-img' src={reactLogo} alt="Logo react" />
      </header>
        <TareasList />
    </div>
  );
}

export default App;
