import React, { Component } from "react";
import 'bulma/css/bulma.css'
import { patientData } from '../../data/index.js'

export default class PatientDetail extends Component {
  state = {
    times: 0,
    patient_id: "",
    rank: 0,
    risk: 0,
    info: {},
    contact: {},
    location: {},
    toggled: false
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(this.state.times == 0) {
      this.get(this.props.id)
    }
    this.interval = setInterval(() => {
      this.get(this.props.id)
    }, 59000)
  }

  get(patient_id) {

    //query from db
    // optional fields are name, lastName, email, latLng
    const patient = patientData

    this.setState( (prevState) => ({
      patient_id: patient_id,
      rank: patient.rank,
      risk: patient.risk,
      info: patient.info,
      contact: patient.contact,
      location: patient.location,
      times: prevState.times + 1,
      toggled: true
    }))
  }

  close() {
    this.setState({toggled: false})
  }

  riskColor(){
    let risk = this.state.risk
    return (risk < 4) ?'success' : (risk >= 4 && risk < 7) ? 'warning': 'danger'

  }
  
  patientInfo(){
    let info = this.state.info
    let fields = []
    if(info.name) fields.push(<p class="is-capitalized"><b>Nombre:</b> {info.name}</p>)
    if(info.lastName) fields.push(<p class="is-capitalized"><b>Apellido:</b> {info.lastName}</p>)
    return(
      <div>
        {fields}
        <p class="is-capitalized"><b>Edad:</b> {info.age}</p>
        <p class="is-capitalized"><b>Sexo:</b> {info.sex}</p>
      </div>
    )
  }

  patientContact(){
    let contact = this.state.contact
    let fields = []
    if(contact.phone) fields.push(<p class="is-capitalized"><i class="fa fa-phone" aria-hidden="true"></i> {contact.phone}</p>)
    if(contact.email) fields.push(<p class="is-capitalized"><i class="fa fa-envelope" aria-hidden="true"></i> {contact.email}</p>)
    
    return(<div>{fields}</div>)
  }
  
  render(){
    return(
      <div class="is-clipped">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div class={`modal ${(this.state.toggled)?'is-active':'' }`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Descripcion </p>
              <button class="delete" aria-label="close" onClick={()=>{this.close()}}></button>
            </header>
            <section class="modal-card-body">
              <div class="tile is-ancestor">
                <div class="tile is-vertical">
                  <div class="tile">
                    <div class="tile is-parent is-vertical is-4">
                      
                      <div class="tile is-child box has-background-primary">
                        <div className="content">
                          <p className="title">Rank</p>
                          <p className="subtitle">{this.state.rank}</p>
                        </div>
                      </div>
                      <div class={`tile is-child box has-background-${this.riskColor()}`}>
                        <div className="content">
                          <p className="title">Risk</p>
                          <p className="subtitle">{this.state.risk}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="tile is-parent is-vertical">
                      <div class="tile is-child box">
                        <div class="content">
                          <p className="title">Información</p>
                          {this.patientInfo()}
                        </div>
                      </div>
                      <div class="tile is-child box">
                        <div className="content">
                          <p className="title">Contacto</p>
                          {this.patientContact()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
          </div>
        </div>
      </div>
    )
  }
}
