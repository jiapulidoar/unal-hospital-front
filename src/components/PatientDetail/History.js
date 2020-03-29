import React, { Component } from "react";
import 'bulma/css/bulma.css'

export default class History extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div class="section">
        <h1 class="title">
          Historia
        </h1>
        <h2 class="subtitle">
          Evolución del Paciente
        </h2>
      </div>
    )
  }
}
