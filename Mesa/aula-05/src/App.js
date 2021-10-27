
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const nomeEmpresa = {
    name: "Digital House Testes",
    cnpj: "26.226.155/0001-33",
  }

  return (
    <>
      <Header />
      <Banner>
        <p>Texto</p>
        <button>Botão</button>
      </Banner>
      <Footer empresa={nomeEmpresa} />
    </>
  );
}

export default App;
