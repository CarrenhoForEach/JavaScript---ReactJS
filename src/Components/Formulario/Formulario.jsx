import React, { Component } from "react";
import "./estilo.css";

class Formulario extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handlerMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        //console.log(evento.target.value);
    }
    _handlerMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return(
            <form className = "form-cadastro"
            onSubmit = {this._criarNota.bind(this)}
            >
            <input type="text" placeholder="Título" className="form-cadastro_input"
            onChange = {this._handlerMudancaTitulo.bind(this)}
            />
            <textarea 
            rows={28}
            className="form-cadastro_input" placeholder="Digite aqui a sua nota... " 
            onChange = {this._handlerMudancaTexto.bind(this)}
            />
            <button className="form-cadastro_input form-cadastro_submit">Enviar notas</button>
            </form>
        );
    }
}

export default Formulario;