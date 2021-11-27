import axios from "axios";
import api from "./api";
import React from 'react';
import { Link } from "react-router-dom";

function Produtos() {
const[itens, setItens] = React.useState([]);

    React.useEffect(consultar, []);

    function consultar(){
        const listar = (res) => setItens(res.data);
        api.get("/produto").then(listar);
    }
    return (
        <>
            <h1>Produtos</h1>
            <ul>
                {itens.map((i) => (
                    <li key={i.id}>
                        {i.nome} - <Link to={`/produto/${i.id}`}>Detalhes do Produto</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Produtos;