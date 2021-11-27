import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import DescricaoProduto from './components/DescricaoProduto';
import Carrinho from './components/Carrinho';
import PaginaInicial from './components/PaginaInicial';

function App() {

  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PaginaInicial}/>
          <Route path="/descricao/:id" component={DescricaoProduto}/>
          <Route path="/carrinho" component={Carrinho}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App