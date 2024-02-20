import './styles/style.css';
import './styles/mobile-style.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
