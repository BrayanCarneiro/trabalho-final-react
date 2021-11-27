import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import api from "./api";
import React from 'react';

export default function DescricaoProduto() {

    const { id } = useParams();
    const [item, setItem] = React.useState({});

    React.useEffect(consultar, []);

    function consultar() {
        const mostrarDetalhe = (res) => setItem(res.data);
        api.get(`/produto/${id}`).then(mostrarDetalhe);
    }

    let dido ={}

    async function pegaprod(id){
        return await api.get(`/produto/${id}`)    
    } 
     

    async function addcarrim(id){
        dido = await pegaprod(id)
        let DTO = transformaDTO(dido.data)
        await api.post('/pedido', DTO)
    }

    function transformaDTO(object){
       return(
         {
            dataPedido: dido.data.dataFabricacao,
            idCliente: 1,
            itens: [
              {
                idProduto: object.id,
                nomeProduto: object.nome,
                qtdItens: 1,
                subTotal: object.valor,
                valor: object.valor
              }
            ],
            nomeCliente: "ze",
            pedidoStatus: "AGUARDANDO_PAGAMENTO",
            total: 1
          
        })
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} >
                    <Image style = {{height: "500px", width: "502px" }} src={item.fotoLink} rounded />
                    </Col>
                    <Col sm={6} style={{marginTop: "200px"}}>
                        <h1> {item.nome}</h1>
                        <p>{item.descricao}</p>
                        <h2>R${item.valor},00</h2>
                        <Button variant="primary" onClick ={()=> addcarrim(item.id)} >Adicionar ao carrinho</Button>
                        {'  '}
                        <Button variant="primary">
                            <Link to= "/carrinho" style={{textDecoration:"none", color: "white"}}>
                                Ver carrinho
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}