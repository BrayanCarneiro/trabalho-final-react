import {Row, Col, Card, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardProduto() {

    let estilo = {
        margin: "40px 0"
    }

    return (
        <>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length:  6}).map((_, idx) => (
                        <Col style={estilo}>
                            <Card>
                            <Card.Img variant="top" src="https://preview.redd.it/0na3mtd688l41.jpg?auto=webp&s=75b28f8447424e23e03e5fe4b93dde8eb1c903bd" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="primary">
                                <Link style={{textDecoration:"none", color: "white"}} to="/descricao">Ver produto</Link>
                            </Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}