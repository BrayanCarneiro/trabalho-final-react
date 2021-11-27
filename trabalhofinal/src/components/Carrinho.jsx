import { Card, Container } from 'react-bootstrap';
import React from 'react';
import api from './api';

export default class Carrinho extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listaPedido: [],
            listaCarrinho: []
        };
    }

    componentDidMount() {
        this._asyncRequest = api.get('/pedido').then(listaPedido => {
            this._asyncRequest = null;
            this.setState({listaPedido: listaPedido.data.filter(pedido => pedido.pedidoStatus == "AGUARDANDO_PAGAMENTO")});
            
            this.state.listaPedido.forEach(produto => {
            this._asyncRequest = api.get(`/pedido/${produto.id}`).then( produto =>{
            this._asyncRequest = null
            this.setState({ listaCarrinho: [...this.state.listaCarrinho, produto]});
            }   
            );
            });
        } );
    }

    render() {
        console.log(this.state.listaCarrinho); //o pedido da api não retorna ;(
        //o console ficou para efeitos ilustrativos
        
        //os produtos já cadastrados no banco ele retorna; ta com problema no post (segundo os bakenders universitários do grupo)
        //api do bulinha cabô com nois (são 5:42 da manhã de sábado, 27 de novembro de 2021)
        
        return(
            <>
                <Container >
                   
                    {this.state.listaCarrinho ? this.state.listaCarrinho.map((i) => (
                    <Card style={{margin: "20px 0"}} key={i.id}> 
                        <Card.Header>
                            <h5>{i.data.itens[0] ? `${i.data.itens[0].nomeProduto}` : ``}</h5>
                        </Card.Header>
                        <Card.Body>
                                <Card.Title>{i.data.itens[0] ? `quantidade: ${i.data.itens[0].qtdItens}` : ``}</Card.Title>
                                <Card.Text>{i.data.itens[0] ? `valor: R$${i.data.itens[0].valor}` : ``}</Card.Text>
                        </Card.Body>
                    </Card>
                    )) : <p>Não há produtos no carrinho</p>
                    }
                   
                </Container>  
            </>
        )
    }
}