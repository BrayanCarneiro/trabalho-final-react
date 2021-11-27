import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import EventEmitter from '../utils/EventEmitter.js';
import { Link, useParams } from "react-router-dom";
import api from "./api";
import React from 'react';
import moment from 'moment'

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
        width: "502px"
    }

    // let addcarr = ()=>{
    //     const prod = api.get()
    //     api.post("/pedido")
    // }
    
    let dido ={}

    // let addcarr = (idP)=> {
    // api.get(`/produto/${idP}`).then(response => {dido = response.data } );
    // console.log(dido)
    // api.post('/pedido', dido)
    // .then(response => element.innerHTML = response.data.updatedAt);
    // }
   
   
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


    


//     function conslog(){
//        return (console.log(item.id))
//    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} >
                    <Image style = {stilItem} src={item.fotoLink} rounded />
                    </Col>
                    <Col sm={6}>
                        <h1> {item.nome}</h1>
                        <p>{item.descricao}</p>
                        <h2>R$ {item.valor}</h2>
                        <Button variant="primary" onClick ={()=> addcarrim(item.id)} >Adicionar ao carrinho</Button>
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