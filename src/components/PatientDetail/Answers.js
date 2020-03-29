import React, { Component } from "react";
import 'bulma/css/bulma.css'

export default class Answers extends Component {  
  render(){
    return(
      <div class="section">
        <h1 class="title">
          Preguntas
        </h1>
        <h2 class="subtitle">
          Preguntas y Respuestas del Paciente
        </h2>
        <div className="container">
          <ul>
            {this.props.questions.map((v,id) => {
              return (
                <li key={id}>
                  <b>Q{id}:{v.question}</b>
                  <p>{v.answer}</p>
                </li>
              )
            })}

          </ul>

        </div>
      </div>
    )
  }
}
