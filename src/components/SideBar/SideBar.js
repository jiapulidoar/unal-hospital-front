import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SideBar.scss";

export default class SideBar extends Component {

  handleSubmit = event => {
    event.preventDefault();
    sessionStorage.removeItem("jwt");
    window.location.reload();
    //if (this.props.history) this.props.history.push("/");
  };

  render() {
    return (
      <>
        <aside className="sidebar">
          <div className="top">
            <div className="logo">
              <h2>DASHBOARD</h2>
            </div>
            
            <div className="content">
              <div className="user">
                  <FontAwesomeIcon icon="user-circle" size="6x" />
                  <p>Dr. Jonatan</p>
                  <small onClick={this.handleSubmit}>(cerrar sesión)</small>
              </div>

              <div className="menu">
                <div className="menu-label">SECCIONES</div>
                <div className="item">
                  <FontAwesomeIcon icon="table" />
                  Tabla de respuestas
                </div>
              </div>
            </div>
          </div>

          <div className="bottom menu">
          <p className="menu-label"># RESPUESTAS POR RANKING</p>
          <ul className="menu-list">
            <li>
              {/*eslint-disable-next-line*/}
              <a className="Dot">
                <div className="Ellipse Ellipse-3" />
                Crítico (20)
              </a>
            </li>
            <li>
              {/*eslint-disable-next-line*/}
              <a className="Dot">
                <div className="Ellipse Ellipse-4" />
                Medio (489)
              </a>
            </li>
            <li>
              {/*eslint-disable-next-line*/}
              <a className="Dot">
                <div className="Ellipse Ellipse-5" />
                Bajo (1895)
              </a>
            </li>
          </ul>
          </div>
        </aside>
      </>
    );
  }
}
