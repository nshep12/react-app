import logo from './Light_Bulb_Icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nick Sheppard is changing this homepage.
        </p>
        <a
          className="App-link"
          href="https://as1.ftcdn.net/v2/jpg/02/95/26/46/1000_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have a nice day!
        </a>
      </header>
    </div>
  );
}

export default App;
