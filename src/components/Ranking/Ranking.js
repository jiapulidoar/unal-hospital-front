import React, { Component } from 'react'

import { dataRank, dataStatistics } from '../../data'

class Ranking extends Component {
    state = {
        data: [],
        statistics:{},
        times: 0,
    }

    componentDidMount() {
        
    }


    render() {
        const { ranking } = this.props
        this.ranks = ranking.map((item) =>
            <tr><th>{item.idPatient}</th><td>{item.risk > 70 ? 'Alto' : item.risk > 50 ? 'Medio' : 'Bajo'}</td></tr>
        );

        return (
            <div id="ranking">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://unpkg.com/bulma@0.8.0/css/bulma.min.css" />
                <table class="table is-bordered is-striped is-narrow is-fullwidth">
                  <thead>
                    <tr>
                      <th><abbr title="Id Paciente">Id Paciente</abbr></th>
                      <th><abbr title="Riesgo">Riesgo</abbr></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.ranks}
                  </tbody>
                </table>
            </div>
        )
    }
}

export default Ranking