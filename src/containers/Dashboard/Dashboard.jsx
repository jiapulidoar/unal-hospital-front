import React, { Component } from 'react'
import DataTable from '../../components/Table/Table'
import PatientDetail from '../../components/PatientDetail/PatientDetail'
import { dataRank, dataStatistics } from '../../data'

import './Dashboard.scss'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ranking: null,
            statistics:null
        }
    }

    componentDidMount() {
        // fetch(...).then(...)
        this.setState({
            ranking: dataRank,
            statistics: dataStatistics
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        sessionStorage.removeItem("jwt");
        window.location.reload();
        //if (this.props.history) this.props.history.push("/");
    }
    render() {
        const { ranking, statistics } = this.state;
        console.log(ranking && statistics ? true : false)

        return (
            <div id="dashboard-page">
              <button class="button is-primary"
                onClick={this.handleSubmit}
              >Logout</button>
                <h1>Dashboard</h1>
                { ranking && statistics ?
                    <DataTable ranking={ranking} statistics={statistics} />
                    : ''
                }

                <div class="container">
                    <PatientDetail id = "p1234"/>
                </div>
            </div>
        )
    }
}
