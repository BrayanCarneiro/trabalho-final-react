import React, { useEffect } from "react";
import EventEmitter from "../utils/EventEmitter";

function Carrinho(props){

    // const api = axios.create({
//   baseURL: "https://619ff2c9a647020017613242.mockapi.io/"
// });

// api.get("/").then((response) => console.log(response.data));


// const [count, setCount] = React.useState(0);

const [listaState, setListaState] = React.useState([]);

let listaGeral = [];

useEffect(() => {
    const onNovoProduto = (eventData) => {
        // let listaNova = []
        listaGeral.push(eventData);       
        console.log('listaGeral', listaGeral);
        setListaState(valorAnterior => ([
            ...valorAnterior, eventData
        ]))
        console.log(listaState);
    }

    const listener = EventEmitter.addListener('novoProduto', onNovoProduto)

    return () => {
        listener.remove();
    }
}, [])




let item1 = {
        nome: "carlos el topo que gira",
        preco: 10.00,
        quantidade: 0,
        id : 1
    }

let item2 = {
        nome: "relampagu ma quim",
        preco: 5.00,
        quantidade:0,
        id : 2
    }

let item3 = {
        nome: "mamaco",
        preco: 10000000.00,
        quantidade:0,
        id : 3
}

    let produtos = [item1,item2,item3];

function aumentar(item,index){
//  let index = lista.indexOf(produto => produto.id == item.id)
 
 produtos.forEach(produto => produto.id == item.id ? item.quantidade = item.quantidade+1 : item.quantidade )
   console.log ('item',item)
   console.log ('index',index)
}

return(

   <div>
    <p>Carrinho</p>
    <ul> 
         {listaGeral.map((item,index) => {


        // const [item, setCount] = React.useState(0);

        return(
            <li key = {item.id}>
            {item.nome}
            <br />


          <p>total: {item.preco*item.quantidade}</p>
          <br />
          <br />
            </li>
        )


    })} 

    </ul>

    </div>
)
    }
export default Carrinho;
