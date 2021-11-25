import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardProduto from './components/CardProduto';

function App() {

  return (
    <>
      <NavBar/>
      <CardProduto/>
      <Footer/>
    </>
  );
}

export default App
