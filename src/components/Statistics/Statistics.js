import React, { Component } from "react";
import PropTypes from 'prop-types'
import mapimg from './mapcovid.png'

class DataTable extends Component {
  state = {
    statistics:{},
    times: 0
  }

 render() {
   const { statistics } = this.props
   console.log(ranking);
    return (
    <div>
      <div class="columns">
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
    </div>
    )
  }
}

DataTable.propTypes = {
  ranking: PropTypes.array,
  statistics: PropTypes.object
}

export default DataTable
