import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Formulario extends Component {
  nombreRef = React.createRef(); // guardando el input
  apellidoRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (e) => {
    e.preventDefault();

    let genero = 'hombre';

    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value; // guardando el valor del input del usuario
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.value;
    }

    let user = {
      nombre: this.nombreRef.current.value,
      apellido: this.apellidoRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user,
    });

    console.log('formulario enviado');
    console.log(user); // para acceder al valor del objeto
  };

  render() {
    if (this.state.user.nombre) {
      var user = this.state.user;
    }

    return (
      <div id='formulario'>
        <h2 className='subheader'>Formulario</h2>

        {/* Mostrar datos del formulario */}
        {this.state.user.nombre && (
          <div id='user-data'>
            <p>
              Nombre: <strong>{user.nombre}</strong>
            </p>
            <p>
              Apellido: <strong>{user.apellido}</strong>
            </p>
            <p>
              Bio: <strong>{user.bio}</strong>
            </p>
            <p>
              Genero: <strong>{user.genero}</strong>
            </p>
          </div>
        )}

        <div className='center'>
          <div id='content'>
            {/* Crear un formulario */}

            <form
              className='mid-form'
              onSubmit={this.recibirFormulario} /* onChange={this.recibirFormulario} muestra los datos reactivamente*/
            >
              <div className='form-group'>
                <label htmlFor='apellidos'>Apellido</label>
                <input id='apellidos' type='text' name='apellido' ref={this.apellidoRef} />
              </div>

              <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label>
                <input id='nombre' type='text' name='nombre' ref={this.nombreRef} />
              </div>

              <div className='form-group'>
                <label htmlFor='bio'>Biografía</label>
                <textarea id='bio' name='bio' ref={this.bioRef}></textarea>
              </div>

              <div className='form-group radibuttons'>
                <label htmlFor='hombre'>
                  <input id='hombre' type='radio' name='genero' value='hombre' ref={this.generoHombreRef} />
                  Hombre
                </label>
                <label htmlFor='mujer'>
                  <input id='mujer' type='radio' name='genero' value='mujer' ref={this.generoMujerRef} />
                  Mujer
                </label>
                <label htmlFor='otro'>
                  <input id='otro' type='radio' name='genero' value='otro' ref={this.generoOtroRef} />
                  Otro
                </label>
              </div>

              <div className='clearfix'></div>

              <input type='submit' value='Enviar' className='btn btn-success' />
            </form>
          </div>
          <Sidebar blog='false' /> {/* props */}
        </div>
      </div>
    );
  }
}

export default Formulario;
