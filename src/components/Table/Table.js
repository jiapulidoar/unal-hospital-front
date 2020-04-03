import React, { Component } from "react";
import PropTypes from 'prop-types'
import Ellipse from 'components/Ellipse/Ellipse.jsx'
import PatientDetail from "../../components/PatientDetail/PatientDetail";

import './Table.scss'

class DataTable extends Component {
  state = {
    statistics:{},
    times: 0
      ,toggled: false
      , idPatient: ""
  }

  componentDidMount() {
    //Update data every minute except first time
    if(this.state.times===0){
      this.get()
    }
    this.interval=setInterval( () => {
      this.get()
      }, 59000);
  }

  get(){
    //GET HTTP method
    this.setState( (prevState) => ({
      times: prevState.times + 1
    }));
  }

  castDate(timestamp){
    var date= new Date(timestamp)
    return date.toString()
  }
/**/
handleToggle = (event,patient) => {
  event.preventDefault();
  this.setState((prev, props) => {
    const newtogg = !prev.toggled;
    return {
      ranking: prev.ranking,
      statistics: prev.statistics,
      toggled: newtogg,
      idPatient: patient };
  });
};
/**/

 render() {
   const { ranking } = this.props
   console.log(ranking);

    //render HTML table
    return (
    <div id="data-table">
      <div className="columns">
        <div className="column is-offset-1 is-10">
            <h3><b>Ranking Pacientes</b></h3>
            <table  className = "table">
              <thead>
                <tr>
                  <th data-field="date">
                    <abbr title = "Position">ID Paciente</abbr>
                  </th>
                  <th data-field="random">Rank</th>
                  <th data-field="random">Fecha</th>
                  <th data-field="random">Edad</th>
                  <th data-field="random">Sexo</th>
                  <th data-field="random">Télefono</th>
                  <th data-field="random">Email</th>
                  <th data-field="random">Más info</th>
                </tr>
              </thead>
              <tbody>
               {ranking.map(patient =>
                  <tr key={patient.idPatient}>
                  <td>{patient.idPatient}</td>
                  <td class="risk">
                    <Ellipse color={patient.risk > 0.7 ? "red" : (patient.risk > 0.5 ? "yellow" : "green")} />
                    </td>
                  <td>{patient.date.split(",")[0]}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.email}</td>
                  <td className="detail" onClick={(e) => this.handleToggle(e, patient.idPatient)}>Detalle</td>
                </tr>
               )}
              </tbody>
            </table>
        </div>
      </div>

      <div className="container">
        {this.state.toggled ? <PatientDetail id="p1234" toggled={true} idPatient={this.state.idPatient}/> : null}
      </div>
    </div>
    )
  }
}

DataTable.propTypes = {
  ranking: PropTypes.array,
}

export default DataTable
