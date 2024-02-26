import './styles/style.css';
import Nav from './components/Nav/Nav';
import Home from  './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';

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
