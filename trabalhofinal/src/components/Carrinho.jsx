import {Row, Col, Button, Container} from 'react-bootstrap';
import React, { useState } from 'react'
import api from './api';

export default function Carrinho() {
    const [count, setCount] = useState(1);


    // React.useEffect(() => { chamadaAPI() }, [])

    // const idCliente = 2;

    // const chamadaAPI = (props) => {

    //     Api.get(`/pedido`).then((result)=> {

    //         if (result.data?.length > 0) {
    //             const encontrado = result.data.find((pedido) => pedido.cliente?.id == idCliente);
    //             if (encontrado) {
    //                 setItensPedido(encontrado.itensPedido);
    //             }
    //         }
    //     })
    // };


    React.useEffect(()=> {itemCarr}, [])

    let itemCarr = ()=>{
        const listar = (res) => setItens(res.data);
        api.get("/pedido").then(listar);
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>Produto aqui</Col>
                    <Col md="auto">
                        <Button variant="outline-primary" onClick={() => setCount((count) => count + 1)}>
                            {count}
                        </Button>
                    </Col>
                    <Col xs lg="2">
                        <h3>R$100,00</h3>
                    </Col>
                </Row>  
            </Container>
        </>
    );
}