import React, {Component} from 'react';

class MiComponente extends Component{

  render(){ /* el metodo render muestra la vista al usuario */

    let receta = {
      nombre: 'Pizza',
      ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
      calorias: 400
    };

    return( // JSX
     <React.Fragment>
      <h1>{receta.nombre}</h1> {/* aca el jsx  */}
      <h2>{'Calorias: ' + receta.calorias}</h2>
      
       <ol>
       {
         receta.ingredientes.map((ingrediente, i) => { /* metodo map para recorrer un array y sacar los datos */
          console.log(ingrediente)
          return (
            <li key={i}>
              {ingrediente}
            </li>
          )
         })
       }
       </ol>
       <hr/>

       {this.props.saludo && // condicion if, se muestra saludo cuando la condición exista
        <React.Fragment>
          <h1>Desde una Prop: </h1>
          <h3>{this.props.saludo}</h3>
        </React.Fragment>

      }

     </React.Fragment>
    );
  }

}

export default MiComponente;