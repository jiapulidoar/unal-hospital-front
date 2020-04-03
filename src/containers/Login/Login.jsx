import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions.js';

import './Login.scss'

class Login extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    console.log(event.target)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.loginUser(this.state).then( r=>{
      console.log("login")
      console.log(this.props)
      this.props.history.replace("/dashboard");
      }
    );
    //window.location.reload();
  }

  render() {
    return (
      <div id="login-page">
        <div className="header">
          <img src={process.env.PUBLIC_URL + "/images/Group 47.png"} alt=""/>
        </div>
        <div className="content">
          <div className="wrapper">
          <p>Escribe tus credenciales de acceso para entrar al dashboard</p>
            <form>
              <input
                id="email"
                onChange={this.handleChange}
                value={this.state.email}
                className="input" type="text" placeholder="Correo" />

              <input
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
                className="input" type="password" placeholder="Contraseña" />

              <button onClick={this.handleSubmit} className="button is-fullwidth">Iniciar sesión</button>
            </form>
            <img className="unal-logo" src={process.env.PUBLIC_URL + "/images/unal.png"} alt=""/>

          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions,dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);
