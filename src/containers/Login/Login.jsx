import React, { Component } from "react";
import HospotalLogo from "../../images/hospital.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                          type="email"
                          placeholder="Correo"
                          autoFocus=""
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          placeholder="Contraseña"
                        />
                      </div>
                    </div>
                    <button className="button is-block is-info is-large is-fullwidth">
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
