import React, { Component } from "react";
import "./SideBar.css";

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
        <aside className="menu">
          <p className="menu-label GENERAL">General</p>
          <ul className="menu-list">
            <li>
              {/*eslint-disable-next-line*/}
              <a className="is-active">Tabla de respuestas</a>
              <ul className="Dashboard-Customers">
                <li>
                  {/*eslint-disable-next-line*/}
                  <a>Estadísitcas generales</a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a>Mapa</a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a>Casos críticos sin atender</a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">RESPUESTAS POR RANKING</p>
          <ul className="menu-list">
            <li>
              <ul className="Payments-Transfers-B">
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
            </li>
          </ul>
          <p className="menu-label">RESPUESTAS POR SEXO</p>
          <ul className="menu-list">
            <li>
              <ul className="Payments-Transfers-B">
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse" />
                    Femenino (20)
                  </a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse" />
                    Masculino (489)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">RESPUESTAS POR EDAD</p>
          <ul className="menu-list">
            <li>
              <ul className="Payments-Transfers-B">
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse" />0 a 19 años (20)
                  </a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse" />
                    20 a 40 años (489)
                  </a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse" />
                    40 a 60 años (1895)
                  </a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse" />
                    60 en adelante (1895)
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <button className="button is-primary" onClick={this.handleSubmit}>
            Logout
          </button>
        </aside>
      </>
    );
  }
}
