import React, { Component } from 'react'
import DataTable from '../../components/Table/Table'
import PatientDetail from '../../components/PatientDetail/PatientDetail'
import { dataRank, dataStatistics } from '../../data'

import './Dashboard.scss'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ranking: null
        }
    }

    componentDidMount() {
        // fetch(...).then(...)
        console.log(dataRank);
        
        this.setState({ 
            ranking: dataRank,
            statistics: dataStatistics
        })
    }

    render() {
        const { ranking, statistics } = this.state;
        console.log(ranking && statistics ? true : false)
        
        return (
            <div id="dashboard-page">
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
