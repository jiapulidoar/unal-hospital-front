import React, { Component } from "react";
import "bulma/css/bulma.css";
import { patientData } from "../../data/index.js";
import Detail from "./Detail";
import Answers from "./Answers";
import History from "./History";

export default class PatientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient_id: "",
      rank: 0,
      risk: 0,
      info: {},
      contact: {},
      location: {},
      times: 0,
      toggled: false,
      tab: 1
    };
  }
  componentDidMount() {
    // if(this.state.times===0) {
    //   this.get(this.props.id)
    // }
    // this.interval = setInterval(() => {
    //   this.get(this.props.id)
    // }, 59000)
  }

  get(patient_id) {
    //query from db
    // optional fields are name, lastName, email, latLng
    const patient = patientData;
    this.setState(prevState => ({
      patient_id: patient_id,
      rank: patient.rank,
      risk: patient.risk,
      info: patient.info,
      contact: patient.contact,
      location: patient.location,
      questions: patient.questions,
      times: prevState.times + 1,
      toggled: true
    }));
  }

  close() {
    this.setState({ toggled: false });
  }

  tab() {
    if (this.state.tab === 1) {
      let detail = (({ rank, risk, info, contact, location }) => ({
        rank,
        risk,
        info,
        contact,
        location
      }))(this.state);
      return <Detail patient={detail} />;
    } else if (this.state.tab === 2) {
      return <Answers questions={this.state.questions} />;
    }
    return <History />;
  }

  render() {
    return (
      <div id="patient-detail" class="is-clipped">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="./PatientDetail.css" />

        <div class={`modal ${this.state.toggled ? "is-active" : ""}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Paciente </p>
              <button
                class="delete"
                aria-label="close"
                onClick={() => {
                  this.close();
                }}
              ></button>
            </header>
            <section class="modal-card-body">
              <div class="tabs is-centered">
                <ul>
                  <li class={`${this.state.tab === 1 ? "is-active" : ""}`}>
                    <div onClick={() => this.setState({ tab: 1 })}>
                      <span class="icon is-small">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </span>
                      <span>Descripcion</span>
                    </div>
                  </li>
                  <li class={`${this.state.tab === 2 ? "is-active" : ""}`}>
                    <div onClick={() => this.setState({ tab: 2 })}>
                      <span class="icon is-small">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      </span>
                      <span>Preguntas</span>
                    </div>
                  </li>
                  <li class={`${this.state.tab === 3 ? "is-active" : ""}`}>
                    <div onClick={() => this.setState({ tab: 3 })}>
                      <span class="icon is-small">
                        <i class="fa fa-file-text" aria-hidden="true"></i>
                      </span>
                      <span>Historia</span>
                    </div>
                  </li>
                </ul>
              </div>
              {this.tab()}
            </section>
          </div>
        </div>
      </div>
    );
  }
}
