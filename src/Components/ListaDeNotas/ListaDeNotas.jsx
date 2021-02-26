import React, { Component } from 'react';
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) =>{
                //Array.of("Trabalho", "Estudo", "Lazer").map((categoria, index) =>{
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto} />
                        </li>
                    );
                })}           
            </ul>
        );
    }

}

export default ListaDeNotas;