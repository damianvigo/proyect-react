import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Sidebar extends Component {
  searchRef = React.createRef(); // recogiendo el valor del campo que el usurio introduce

  state = {
    search: '',
    redirect: false,
  };

  redirectToSearch = (e) => {
    e.preventDefault();

    this.setState({
      search: this.searchRef.current.value,
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/redirect/' + this.state.search} />;
    }

    return (
      <aside id='sidebar'>
        {this.props.blog == 'true' && (
          <div id='nav-blog' className='sidebar-item'>
            <h3>Crear Artículo</h3>
            <Link to={'/blog/crear'} className='btn btn-success'>
              Comienza
            </Link>
          </div>
        )}

        <div id='search' className='sidebar-item'>
          <h3>Descubre</h3>
          <p>Encuentra tu artículo</p>
          <form onSubmit={this.redirectToSearch}>
            <input type='text' name='search' ref={this.searchRef} />
            <input type='submit' name='submit' value='Buscar' className='btn' />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
