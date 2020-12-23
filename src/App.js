import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  const appName = 'App'
  const version = '0.1.7'
  const keywords = appName + '@' + version

  return (
    <div className="App">
      <Helmet>
        <meta name='author' content='Kevin Ashworth' />
        <meta name='keywords' content={keywords} />
      </Helmet>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
