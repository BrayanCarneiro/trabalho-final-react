import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardProduto from './components/CardProduto';
import DescricaoProduto from './components/DescricaoProduto';
import Carrinho from './components/Carrinho';
import Home from './components/Home';
import Produtos from './components/Produtos';
import ProdutoDetalhe from './components/ProdutoDetalhe';

function App() {

  return (
    <>
      <NavBar/>
      {/*<CarrinhoTeste/>*/}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Produtos} exact />
          <Route path="/produto/:id/" component={ProdutoDetalhe} exact />
          <Route path="/produto/:id/foto" component={ProdutoDetalhe} exact />
          <Route path="/carrinho" component={Carrinho} exact/>
          <Route path="/descricao" exact component={CardProduto}/>
          <Route path="/descricao" component={DescricaoProduto}/>
          <Route path="/carrinho1" component={Carrinho}/>
          
          

          <Route path="*"></Route>
          <h1>404</h1>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App