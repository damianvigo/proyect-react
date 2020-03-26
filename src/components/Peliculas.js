import React, {Component} from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {

  state = {}

  cambiarTitulo = () => {
    
    let { peliculas } = this.state;
    peliculas[2].titulo = "Espartaco"; // react sabe que tiene que cambiar por que esta la key={i}

    this.setState({
      peliculas: peliculas
    })
  }

  favorita = (pelicula) => {
    console.log('Favorita marcada');
    console.log(pelicula);
    this.setState({
      favorita: pelicula
    })
  }

  componentWillMount(){ /* metodos de ciclo de vida de los componentes */
    // alert('Se va a montar el componente');
    this.setState({
      peliculas: [
        {titulo: 'Titanic', image: 'https://www.estrelladigital.es/media/estrelladigital/images/2011/12/19/2014022420571124246.jpg'},
        {titulo: '1917', image: 'https://elcriticoabulico.files.wordpress.com/2020/01/1917.jpg'},
        {titulo: 'Gladiador', image: 'https://4.bp.blogspot.com/-UJySjzoeoZI/TcFtUYQyNhI/AAAAAAAAACc/xkE6mf9F-9o/s1600/gladiator01800.jpg'}
      ],
      nombre: 'Damian Vigo',
      favorita: {}
    })
  }

  componentDidMount() { // metodos de ciclo de vida de los componentes 
   // alert('Ya se ha montado el componente');
  }

  componentWillUnmount(){
    // alert('Me voy a desmontar');
  }

  render() { /* metodos de ciclo de vida de los componentes */
    
    var pStyle = {
      background: 'green',
      color: 'white',
      padding: '10px'
    };
    
    /* var favorita;
    if(this.state.favorita.titulo) {
      favorita = (
        <p className="favorita" style={pStyle}>
        <strong>La pelicula favorita es: </strong>
        <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = (
        <p>No hay pelicula favorita</p>
            )
    } */

    return (
      <React.Fragment>
      <Slider title="Peliculas" /* prop title */
      size="slider-small"
      />
      
      <div className="center">
      <div id="content" className="peliculas">
        
        <h2 className="subheader">Listado de peliculas</h2>
        <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
        
        <div>
        <p><button onClick={this.cambiarTitulo}> Cambiar titulo de Gladiador </button> </p>
        </div>

        {this.state.favorita.titulo ? ( // CONDICION IF ELSE, parecido a una condicion ternaria, en el caso de que la condicion se cumpla
          <p className="favorita" style={pStyle}>
          <strong>La pelicula favorita es: </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
            ) /* y si no  */ : (
              <p>No hay pelicula favorita</p>
            )
        }
        
        {/* Crear componente pelicula */}

        <div id="articles" className="peliculas">
        {
          this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula key={i} 
              pelicula={pelicula} 
              marcarFavorita={this.favorita} 
              indice={i}
              />
            )
          })
        }
      </div>

    </div>
    
    <Sidebar 
        blog="false"
      /> {/* props */}

  </div>
  </React.Fragment>
    );
  }

}

export default Peliculas;