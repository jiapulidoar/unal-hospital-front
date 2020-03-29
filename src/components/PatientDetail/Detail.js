import React, { Component } from "react";
import 'bulma/css/bulma.css'
import mapimg from '../Table/mapcovid.png'
export default class Detail extends Component {
  constructor(props) {
    super(props)

  }


  riskColor(){
    let risk = this.props.patient.risk
    return (risk < 4) ?'success' : (risk >= 4 && risk < 7) ? 'warning': 'danger'
  }
  
  patientInfo(){
    let info = this.props.patient.info
    let fields = []
    if(info.name)
      fields.push(<p class="is-capitalized"><b>Nombre:</b> {info.name}</p>)
    if(info.lastName)
      fields.push(<p class="is-capitalized"><b>Apellido:</b> {info.lastName}</p>)
    return(
      <div>
        {fields}
        <p class="is-capitalized"><b>Edad:</b> {info.age}</p>
        <p class="is-capitalized"><b>Sexo:</b> {info.sex}</p>
      </div>
    )
  }

  patientContact(){
    let contact = this.props.patient.contact
    let fields = []
    if(contact.phone)
      fields.push(<p class="is-capitalized"><i class="fa fa-phone" aria-hidden="true"></i> {contact.phone}</p>)
    if(contact.email)
      fields.push(<p class="is-capitalized"><i class="fa fa-envelope" aria-hidden="true"></i> {contact.email}</p>)
    return(<div>{fields}</div>)
  }
  
  patientLocation(){
    let location = this.props.patient.location
    let fields = []

    if(location.address) fields.push(<p class="is-capitalized"><i class="fa fa-home" aria-hidden="true"></i> {location.address}</p>)
    
    let loc = (l) =>{
      let str = ""
      if(l.city) str += l.city + " - "
      if(l.district) str += l.district + " - "
      if(l.neighborhood) str += l.neighborhood + " - "
      return str
    }
    if(location.city || location.district || location.neighborhood)
      fields.push(<p class="is-capitalized"><i class="fa fa-location-arrow" aria-hidden="true"></i> {loc(location)}</p>)
    if(location.latLng){
      fields.push(<p class="is-capitalized"><i class="fa fa-map-marker" aria-hidden="true"></i> {location.latLng}</p>)
      fields.push(<img src={mapimg} alt="map" style={{'width':'100%'}}/>)
    }
    return(<div>{fields}</div>)
  }
  render(){
    
    return(
      <div className="section">
        <h1 class="title">
            Descripción
        </h1>
        <h2 class="subtitle">
          Información disponible del paciente
        </h2>
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical is-4">
                <div class="tile is-child box has-background-primary centeredTile">
                  <div className="content">
                    <p className="title">Rank</p>
                    <p className="subtitle">{this.props.patient.rank}</p>
                  </div>
                </div>
                <div class={`tile is-child box has-background-${this.riskColor()}`}>
                  <div className="content">
                    <p className="title">Risk</p>
                    <p className="subtitle">{this.props.patient.risk}</p>
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
            <div className="tile is-parent">
              <div className="tile is-child box">
                <div className="content">
                  <p className="title">Ubicación</p>
                  {this.patientLocation()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
