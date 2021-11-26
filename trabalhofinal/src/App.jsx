import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardProduto from './components/CardProduto';
import DescricaoProduto from './components/DescricaoProduto';

function App() {

  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CardProduto}/>
          <Route path="/descricao" component={DescricaoProduto}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App