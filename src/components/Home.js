import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

  render() {
    
    return(
      <div id="home">
         <Slider title="Bienvenido a React" /* prop title */
          btn="Ir al Blog" /* prop btn */
          size="slider-big"
      />
      
      <div className="center">
       <div id="content">
          <h1 className="subheader">Últimos articulos</h1>
          <Articles home="true" /> {/* prop home, recibirla en articulos */}
      </div>

      <Sidebar /> {/* props */}
      </div>

     
      </div>
    );

  }

}

export default Home;