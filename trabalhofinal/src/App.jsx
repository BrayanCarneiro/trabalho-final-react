import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardProduto from './components/CardProduto';
import DescricaoProduto from './components/DescricaoProduto';

function App() {

  return (
    <>
      <NavBar/>
      <DescricaoProduto/>
      <Footer/>
    </>
  );
}

export default App
