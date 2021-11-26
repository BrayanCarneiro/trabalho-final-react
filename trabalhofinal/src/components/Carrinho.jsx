import {Row, Col, Button, Container} from 'react-bootstrap';
import { useState } from 'react'

export default function Carrinho() {
    const [count, setCount] = useState(1);

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