import HospotalLogo from "../../images/hospital.png";
import React, { Component , PropTypes } from "react";
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions.js'

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
    this.props.actions.loginUser(this.state);
    this.props.history.push("/dashboard");
    //window.location.reload();
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Questrial&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bulma@0.8.0/css/bulma.min.css"
        />
        <link rel="stylesheet" type="text/css" href="./login.css" />
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-black">Inicio de Sesión</h3>
                <hr className="login-hr" />
                <p className="subtitle has-text-black">
                  Bienvenido al Dashboard.
                </p>
                <div className="box">
                  <figure className="avatar">
                    <img src={HospotalLogo} alt="Hospital" />
                  </figure>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          placeholder="Correo"
                            id="email"
                            type='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                            required/>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          id="password"
                          placeholder="Contraseña"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </div>
                    </div>
                    <button
                      className="button is-block is-info is-large is-fullwidth"
                      onClick={this.handleSubmit}
                    >
                      Ingresar{" "}
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script async type="text/javascript" src="./bulma.js"></script>
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
