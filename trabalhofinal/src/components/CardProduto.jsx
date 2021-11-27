import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import api from "./api";

export default function CardProduto() {
    const[itens, setItens] = React.useState([]);

    React.useEffect(consultar, []);

    function consultar(){
        const listar = (res) => setItens(res.data);
        api.get("/produto").then(listar);
    }

    return (
        < div style={{background: "#e3e3e3"}}>
            <Container >
                <h1>Nossos Produtos</h1>
                <Row xs={1} md={3} className="g-4">

                    {itens.map((i) => (
                        <Col style={{margin: "40px 0"}} key={i.id}>
                        <Card>
                        <Card.Img variant="top" src={i.fotoLink} />
                        <Card.Body>
                        <Card.Title>{i.nome}</Card.Title>
                        <h4>R${i.valor},00</h4>
                        <Button variant="primary">
                            <Link style={{textDecoration:"none", color: "white"}} to={`/descricao/${i.id}`}>Ver produto</Link>
                        </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}