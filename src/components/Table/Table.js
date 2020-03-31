import React, { Component } from "react";
import PropTypes from 'prop-types'
import mapimg from './mapcovid.png'

class DataTable extends Component {
  state = {
    statistics:{},
    times: 0
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

 render() {
   const { ranking, statistics } = this.props
   console.log(ranking);

    //render HTML table
    return (
    <div>
      <div class="columns">
        <div class="column is-offset-1 is-6">
            <h3><b>Ranking Pacientes</b></h3>
            <table  class = "table">
              <thead>
                <tr>
                  <th data-field="date">
                    <abbr title = "Position">ID Paciente</abbr>
                  </th>
                  <th data-field="random">Riesgo</th>
                </tr>
              </thead>
              <tbody>
               {ranking.map(patient =>
                 <tr key={patient.idPatient}>
                  <td>{patient.idPatient}</td>
                  <td>{patient.risk}</td>
                </tr>
               )}
              </tbody>
            </table>
        </div>
        <div class="column is-4">
          <h3><b>Estadisticas</b></h3>
          <div class='Card has-background-danger' >
            <div class="card-content">
              <p class="title">
              </p>
              <p class="subtitle">Riesgo Alto
              </p>
              <h4>{statistics.totals.highRisk.numPatients}</h4>
            </div>
          </div>
          <div class='Card has-background-warning' >
            <div class="card-content">
              <p class="title">
              </p>
              <p class="subtitle">Riesgo Medio
              </p>
              <h4>{statistics.totals.midRisk.numPatients}</h4>
            </div>
          </div>
          <div class='Card has-background-success' >
            <div class="card-content">
              <p class="title">
              </p>
              <p class="subtitle">Riesgo bajo
              </p>
              <h4>{statistics.totals.lowRisk.numPatients}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-offset-1 is-10">
          <div class='container is-fluid'>
                <img src={mapimg} alt="map" style={{'width':'100%'}}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

DataTable.propTypes = {
  ranking: PropTypes.array,
  statistics: PropTypes.object
}

export default DataTable
