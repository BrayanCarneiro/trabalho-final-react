import React from "react";
import { useParams } from "react-router-dom";
import api from "./api";
import { Link } from "react-router-dom";

function ProdutoDetalhe () {


    
    const { id } = useParams();
    const [item, setItem] = React.useState({});

    React.useEffect(consultar, []);

    function consultar() {
        const mostrarDetalhe = (res) => setItem(res.data);
        api.get(`/produto/${id}`).then(mostrarDetalhe);
    }
    
    return (
        <>
        <h1>Produto Detalhe - {item.nome}</h1>
        <ul>
            <li>Quantidade no Estoque: {item.qtdEstoque}</li>
            <li>Descrição: {item.descricao}</li>
            <li>Valor: {item.valor}</li>
            <li><Link to= "/carrinho">Adicionar ao Carrinho</Link></li>
            <img src = {item.fotoLink}/>
        </ul>
        
        </>
    );
}

export default ProdutoDetalhe;