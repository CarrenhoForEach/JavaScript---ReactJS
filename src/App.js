import React, { Component } from 'react';
import './assets/index.css';
import "./assets/App.css";
import ListaDeNotas from "./Components/ListaDeNotas";
import Formulario from "./Components/Formulario"
//function App() {
class App extends Component{

  constructor(){
    super();
    //this.notas = [];
    this.state = {
      notas:[]
    }
  }
  
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
    //this.notas.push(novaNota);
    //console.log(this.notas.length);


  }
  
  render(){
    return (
      <section className="conteudo">
        <h1>Thiago Carrenho Ferreira</h1>
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas = {this.state.notas}/>
      </section>
    );
  }
  
//}
  }
export default App;
