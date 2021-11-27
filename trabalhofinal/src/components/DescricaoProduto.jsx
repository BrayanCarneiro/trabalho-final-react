import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import EventEmitter from '../utils/EventEmitter.js';
import { Link, useParams } from "react-router-dom";
import api from "./api";
import React from 'react';

export default function DescricaoProduto() {

    // const novoProduto= () =>{
    //    EventEmitter.emit('novoProduto', {
    //        valor: 1000
    //    })
    // }

    const { id } = useParams();
    const [item, setItem] = React.useState({});

    React.useEffect(consultar, []);

    function consultar() {
        const mostrarDetalhe = (res) => setItem(res.data);
        api.get(`/produto/${id}`).then(mostrarDetalhe);
    }

    let stilItem = {
        height: "500px",
        width: "502px",
    }
    let stilorow = {
        marginTop: "200px"

    }
    return (
        <>
            <Container>
                <Row style = {stilorow}>
                    <Col sm={6}>
                    <Image style = {stilItem} src={item.fotoLink} rounded />
                    </Col>
                    <Col sm={6}>
                        <h1> {item.nome}</h1>
                        <p>{item.descricao}</p>
                        <h2>{item.valor}</h2>
                        <Button variant="primary" >Adicionar ao carrinho</Button>
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