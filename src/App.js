import './App.css';
/* import Header from   ./components/header*/
import Header from './components/header';
function App() {
  return (
    <div className="App">
    <Header />
      <header className="App-header">
      
        <img src= {Header} />
        <p>
          Edit <code>src/App.js</code> and save to reload.458
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
