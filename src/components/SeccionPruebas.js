import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {
  
  contador = 0;

  /*
  constructor(props){ // state: propiedades que se muestran en la vista y son dinamicas y reactivas, funcionan de manera instantanea
    super(props);

    this.state = {
      contador: 0
    };
  }
  */

  state = {
    contador: 0 // forma mas corta de escribir el state
  }
  
  HolaMundo(nombre, edad) {
    var presentacion = (
      <div>
        <h2>Hola, soy {nombre}</h2> {/* no es un string, es un objeto */}
        <h3>Tengo {edad} años</h3>
      </div>
    ); /* entre parentesis para que quede mas claro que es un trozo de jsx */

    return presentacion;
  }

  /* IMPORTANTE METODOS EN FUNCION DE FLECHA PARA NO BINDEAR */
  sumar = (e) => {
    /* this.contador = this.contador+1; */
   /*  this.state.contador = this.state.contador + 1; */
   this.setState({
     contador: (this.state.contador + 1)
   });
  }

  restar = (e) => {
    /* this.contador = this.contador-1; */
    /* this.state.contador = this.state.contador - 1; */
    this.setState({
      contador: (this.state.contador - 1)
    });
  }


  render() {
    var nombre = 'Damián Vigo'; // Importante: Variables fuera del jsx

    return (
      <section id="content">
        <h2 className="subheader">Últimos artículos</h2>
        <p>Hola Damián bienvenido al curso de React</p>


        <h2 className="subheader">Funciones y JSX basico</h2>
        {this.HolaMundo(nombre, 32)}

        <h2 className="subheader">Componentes</h2>
        <section className="componentes">

          <MiComponente />
          <MiComponente />

        </section>

        <h2 className="subheader">Estado</h2>
        <p>
          contado: {this.state.contador}
        </p>
        <p>
          <input type="button" value="Sumar" onClick={this.sumar}/>
          <input type="button" value="Restar" onClick={this.restar} />
        </p>


      </section>
    );
  }
}

export default SeccionPruebas;
