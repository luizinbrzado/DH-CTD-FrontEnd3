import './App.scss';
import About from './components/About';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Header />
      <div className="app">
        <Presentation />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
