import logo from './logo.svg';
import './App.css';
import Index from './modules/Index';
import PowerOfMath from './modules/Index/Power/PowerofMath';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Welcome to AWS Amplify</h1>
      </header> */}
      {/* <Index /> */}
      <PowerOfMath />
    </div>
  );
}

export default App;
