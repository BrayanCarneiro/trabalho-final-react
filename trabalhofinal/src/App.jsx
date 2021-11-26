import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardProduto from './components/CardProduto';
import DescricaoProduto from './components/DescricaoProduto';
import Carrinho from './components/Carrinho';
import CarrinhoTeste from './components/CarrinhoTeste';

function App() {

  return (
    <>
      <NavBar/>
      <CarrinhoTeste/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CardProduto}/>
          <Route path="/descricao" component={DescricaoProduto}/>
          <Route path="/carrinho" component={Carrinho}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App