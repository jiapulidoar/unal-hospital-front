import React, { Component } from "react";
import "./SideBar.css";

export default class SideBar extends Component {
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
                    <div className="Ellipse-3" />
                    Crítico (20)
                  </a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse-4" />
                    Medio (489)
                  </a>
                </li>
                <li>
                  {/*eslint-disable-next-line*/}
                  <a className="Dot">
                    <div className="Ellipse-5" />
                    Bajo (1895)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">Transactions</p>
          <ul className="menu-list">
            <li>
              {/*eslint-disable-next-line*/}
              <a>Payments</a>
            </li>
            <li>
              {/*eslint-disable-next-line*/}
              <a>Transfers</a>
            </li>
            <li>
              {/*eslint-disable-next-line*/}
              <a>Balance</a>
            </li>
          </ul>
        </aside>
      </>
    );
  }
}
