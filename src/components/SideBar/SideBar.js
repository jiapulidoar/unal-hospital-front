import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { number, func, shape } from 'prop-types'
import "./SideBar.scss";
import Ellipse from "components/Ellipse/Ellipse";

class SideBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selected: null,
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    sessionStorage.removeItem("jwt");
    window.location.reload();
    //if (this.props.history) this.props.history.push("/");
  };

  handleOnSelect = value => {
    const selected = this.state.selected === value ? "" : value
    this.setState({ selected }, () => this.props.onSelect(selected))
  }

  render() {
    const { selected } = this.state
    const { semaphore } = this.props    

    return (
      <>
        <aside className="sidebar">
          <div className="top">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt=""/>
            </div>
            
            <div className="content">
              <div className="user">
                  <FontAwesomeIcon icon="user-circle" size="6x" />
                  <p>Dr. Jonatan</p>
                  <small onClick={this.handleSubmit}>(cerrar sesión)</small>
              </div>

              <div className="menu">
                <div className="menu-label">SECCIONES</div>
                <div className="active item">
                  <FontAwesomeIcon icon="table" />
                  Tabla de respuestas
                </div>
                {/* <div className="item" onClick={() => window.location.href = '/map'}>
                  <FontAwesomeIcon icon="map" />
                  Visualizador de mapa
                </div> */}
              </div>
            </div>
          </div>

          <div className="bottom menu">
          <p className="menu-label"># RESPUESTAS POR RANKING</p>
          <ul className="menu-list">
            <li>
              {/*eslint-disable-next-line*/}
              <a className={`Dot ${selected === "high" ? "active" : ''}`} onClick={() => this.handleOnSelect("high")}>
                <Ellipse color="red" />
                Alto ({semaphore ? semaphore.high : '...'})
              </a>
            </li>
            <li>
              {/*eslint-disable-next-line*/}
              <a className={`Dot ${selected === "medium" ? "active" : ''}`} onClick={() => this.handleOnSelect("medium")}>
                <Ellipse color="yellow" />
                Moderado ({semaphore ? semaphore.medium : '...'})
              </a>
            </li>
            <li>
              {/*eslint-disable-next-line*/}
              <a className={`Dot ${selected === "low" ? "active" : ''}`} onClick={() => this.handleOnSelect("low")}>
                <Ellipse color="green" />
                Bajo ({semaphore ? semaphore.low : '...'})
              </a>
            </li>
          </ul>
          </div>
        </aside>
      </>
    );
  }
}

SideBar.propTypes = {
  semaphore: shape({
    high: number,
    medium: number,
    low: number
  }),
  onSelect: func
}

export default SideBar