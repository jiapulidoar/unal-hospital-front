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
      <div className="columns">
        <div className="column is-4">
          <h3><b>Estadisticas</b></h3>
          <div className='Card has-background-danger' >
            <div className="card-content">
              <p className="title">
              </p>
              <p className="subtitle">Riesgo Alto
              </p>
              <h4>{statistics.totals.highRisk.numPatients}</h4>
            </div>
          </div>
          <div className='Card has-background-warning' >
            <div className="card-content">
              <p className="title">
              </p>
              <p className="subtitle">Riesgo Medio
              </p>
              <h4>{statistics.totals.midRisk.numPatients}</h4>
            </div>
          </div>
          <div className='Card has-background-success' >
            <div className="card-content">
              <p className="title">
              </p>
              <p className="subtitle">Riesgo bajo
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
