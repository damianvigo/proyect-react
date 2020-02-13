import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {

  render() {
    
    return(
      <div id="blog">
         <Slider title="Blog" /* prop title */
         size="slider-small"
      />
      <div className="center">

      <div id="content">
        {/* listado de articulos que vendrán del api rest de node :D*/}
       <Articles />
      </div>

      <Sidebar 
        blog="true"
      /> {/* props */}
      </div>

     
      </div>
    );

  }

}

export default Blog;