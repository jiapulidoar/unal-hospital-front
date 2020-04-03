import React, { Component } from "react";
import Collapsible from '../Collapsible/Collapsible'
import "bulma/css/bulma.css";
import { patient } from "../../data/index.js";
import './PatientDetail.scss';

export default class PatientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient_id: this.props.id,
      rank: "high",
      phoneNumber: "",
      name: "",
      age: 55,
      gender: "",
      email: "",
      password: "",
      userType: "",
      geoLocation: {
        latitude: 0,
        longitude: 0 
      },
      location : "",
      date: "",
      history: [],
      times: 0,
      toggled: true,
    };
  }
  componentDidMount() {
     if(this.state.times===0) {
       this.get(this.props.id)
     }
     this.interval = setInterval(() => {
       this.get(this.props.id)
     }, 59000)  
  }

  get(patient_id) {
    //query from db
    // optional fields are name, lastName, email, latLng
    let state = patient;
    state.times = 1;
    this.setState(state);
  }

  close() {
    this.setState({ toggled: false });
  }

  render() {
    return (
      <div id="patient-detail" class="is-clipped">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div class={`modal ${this.state.toggled ? "is-active" : ""}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class={`modal-card-head bg-${this.state.rank}`} b>
              <p class={"modal-card-title is-capitalized"}>{this.state.name} </p>
              <button
                class="delete"
                aria-label="close"
                onClick={() => {
                  this.close();
                }}
              ></button>
            </header>
            <section class="modal-card-body">
              <div className="content">
                <b>Información</b>
                <ul class="clean-ul">
                  <li><strong>Sexo:</strong> {this.state.gender == "male" ? 'Masculino': 'Femenino'}</li>
                  <li><strong>Edad:</strong> {this.state.age}</li>
                  <li><strong>Ubicación:</strong> {this.state.location}</li>
                </ul>
                <b>Contacto</b>
                <ul class="clean-ul">
                    <li><strong>Telefono:</strong> {this.state.phoneNumber}</li>
                    <li><strong>Email:</strong> {this.state.email}</li>
                </ul>
                {this.state.history.map((item,i)=>{
                  let title = (i==0) ? 'Ultima Respuesta' : (i==1) ? 'Respuestas Anteriores' : null;
                  let subtitle = (
                    <div>
                      <p className="Dot">
                        <div className={`Ellipse Ellipse-${(this.rank == 'high') ? '3': (this.rank == 'medium') ? '2' : '1'}`} />
                        {item.date}
                      </p>
                    </div>
                    )
                  
                  return(
                    <Collapsible title={title} subtitle={subtitle} arrow_text="Ver detalle">
                      <p className="content">
                        {this.info}
                      </p>
                    </Collapsible>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
