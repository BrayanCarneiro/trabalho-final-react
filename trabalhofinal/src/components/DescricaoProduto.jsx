import {Container, Row, Col, Image, Button} from 'react-bootstrap';

export default function DescricaoProduto() {

    return (
        <>
            <Container>
                <Row>
                    <Col sm={6}>
                    <Image src="https://preview.redd.it/0na3mtd688l41.jpg?auto=webp&s=75b28f8447424e23e03e5fe4b93dde8eb1c903bd" rounded />
                    </Col>
                    <Col sm={6}>
                        <h1> Carlos, o Jogo </h1>
                        <p>Jogo Tradicional Incrível</p>
                        <p>A série consiste, basicamente, nas aventuras do bandicoot
                            geneticamente alterado, Carlos, que luta para impedir o planos do cientista do mal
                            Neo Córtex e seus lacaios. A história do jogo se passa nas fictícias Ilhas Wumpa,
                            um arquipélago situado na costa noroeste da Austrália, mas outros lugares são revelados.
                        </p>
                        <h2>R$ 1.000,00</h2>
                        <Button variant="primary">Adicionar ao carrinho</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}